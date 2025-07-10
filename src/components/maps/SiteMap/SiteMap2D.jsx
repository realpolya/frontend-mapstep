/* --------------------------------Imports--------------------------------*/

import { useContext, useEffect, useState, useRef } from 'react';

// import { SearchContext } from '../../../pages/SearchResult/SearchResult.jsx';

import './SiteMap.css'
import '../maps.css'
import { MAPBOX_KEY, mapboxStyle } from '../variables.js';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import rewind from '@turf/rewind'; // rewind ring orientation for geometries

/* --------------------------------Component--------------------------------*/

const SiteMap2D = ({ siteDetails, lotGeom }) => {

    // const { address, siteDetails } = useContext(SearchContext)

    mapboxgl.accessToken = MAPBOX_KEY;

    const [loading, setLoading] = useState(true)
    const [lat, setLat] = useState(40.7128)
    const [lng, setLng] = useState(-74.0060)
    const [propertyLine, setPropertyLine] = useState()

    const site2DMapRef = useRef(null)

    useEffect(() => {

        if (siteDetails && siteDetails.longitude) {
            
            setLat(siteDetails.latitude)
            setLng(siteDetails.longitude)
            setLoading(false)

        }

        if (siteDetails.info) {

            setPropertyLine(siteDetails.info?.property_line_geojson)
            console.log("1 geometry", siteDetails?.info?.property_line)
            console.log("2 geometry", siteDetails?.info?.property_line_geojson)

        }

    }, [siteDetails])


    useEffect(() => {

        if (!site2DMapRef.current) {
            console.log('map container is not available at the moment')
            return;
        }

        setLoading(false)
        
        const map = new mapboxgl.Map({
            container: site2DMapRef.current,
            style: mapboxStyle,
            center: [lng, lat], // starting position [lng, lat]. Note that lat must be set between -90 and 90
            zoom: 16
        });

        // add marker for the property
        const el = document.createElement('div')

        el.style.backgroundImage = `url('/reshot-location.svg')`; // Set the PNG image
        el.style.backgroundSize = 'contain'; // Ensure the image fits
        el.style.width = '30px'; // Set marker width
        el.style.height = '30px'; // Set marker height

        new mapboxgl.Marker(el, { offset: [0, 0] })
        .setLngLat([lng, lat])
        .addTo(map);

        // property line from assessor's portal
        map.on('load', () => {
            
            if (lotGeom) {
                console.log("lot geometry is here", lotGeom)
                const fixedGeom = rewind(lotGeom, { reverse: true });

                map.addSource('parcel', {
                    type: 'geojson',
                    data: fixedGeom
                });

                map.addLayer({
                    id: 'parcel-fill',
                    type: 'fill',
                    source: 'parcel',
                    layout: {},
                    paint: {
                        'fill-color': '#088',
                        'fill-opacity': 0.5
                    }
                });

                console.log("rendered")

                // fit all of the rings inside of bounds
                console.log("site details are here in map:", siteDetails)
                const bounds = new mapboxgl.LngLatBounds();
                fixedGeom["geometry"]["coordinates"].forEach(coord => bounds.extend(coord));
                map.fitBounds(bounds, { padding: 20 });
            }

        })
        
        // custom rectangular property line
        map.on('load', () => {

            if (propertyLine) {
                console.log("property line is ", propertyLine)

                map.addSource('property-line', {
                    type: 'geojson',
                    data: propertyLine
                })

                map.addLayer({
                    id: 'property-line-layer',
                    type: 'fill',
                    source: 'property-line',
                    paint: {
                        'fill-color': '#088',
                        'fill-opacity': 0.5
                    }
                });
            }

        });


        return () => map.remove();

    }, [site2DMapRef, MAPBOX_KEY, lng, lat])

    return (
        <div className="div-map" id='div-site-map-2D'>
            { loading && (<p>No map yet</p>)}

            <div ref={site2DMapRef} id='site-2d-map-ref'
            ></div>
        </div>
    )
}

/* --------------------------------Export--------------------------------*/

export default SiteMap2D