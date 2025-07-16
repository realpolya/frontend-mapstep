/* --------------------------------Imports--------------------------------*/

import { useContext, useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// import { SearchContext } from '../../../pages/SearchResult/SearchResult.jsx';

import './SiteMap.css'
import { MAPBOX_KEY, mapboxStyle } from '../variables.js';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

/* --------------------------------Component--------------------------------*/

const SiteMap3D = ({ siteDetails }) => {

    // const { siteDetails } = useContext(SearchContext)
    // const { projectDetails } = useContext(ProjectContext)

    // use different details based on context
    // const details = location.pathname.includes("/project")
    //     ? projectDetails
    //     : siteDetails;

    mapboxgl.accessToken = MAPBOX_KEY;

    const [loading, setLoading] = useState(true)
    const [lat, setLat] = useState(40.7128)
    const [lng, setLng] = useState(-74.0060)

    const site3DMapRef = useRef(null)

    useEffect(() => {

        if (siteDetails && siteDetails.longitude) {
            
            setLat(siteDetails.latitude)
            setLng(siteDetails.longitude)
            setLoading(false)

        }

    }, [siteDetails])


    useEffect(() => {

        if (!site3DMapRef.current) {
            console.log('map container is not available at the moment')
            return;
        }

        // setLoading(false)
        if (loading) return;
        
        // initialize mapbox map
        const map = new mapboxgl.Map({
            container: site3DMapRef.current,
            style: mapboxStyle,
            center: [lng, lat], // starting position [lng, lat]. Note that lat must be set between -90 and 90
            zoom: 16.5,
            pitch: 30,
            bearing: -17.6
        });

        // add 3D buildings
        map.on('style.load', () => {

            const layers = map.getStyle().layers;
            const labelLayerId = layers.find(
                (layer) => layer.type === 'symbol' && layer.layout['text-field']
            ).id;
            
            map.addLayer(
                {
                    'id': 'add-3d-buildings',
                    'source': 'composite',
                    'source-layer': 'building',
                    'filter': ['==', 'extrude', 'true'],
                    'type': 'fill-extrusion',
                    'paint': {
                        'fill-extrusion-color': '#aaa',
    
                        // Use an 'interpolate' expression to
                        // add a smooth transition effect to
                        // the buildings as the user zooms in.
                        'fill-extrusion-height': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            15,
                            0,
                            15.05,
                            ['get', 'height']
                        ],
                        'fill-extrusion-base': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            15,
                            0,
                            15.05,
                            ['get', 'min_height']
                        ],
                        'fill-extrusion-opacity': 0.5
                    }
                }
            )

        })

        // add marker
        const el = document.createElement('div')

        el.style.backgroundImage = `url('/reshot-location.svg')`; // Set the PNG image
        el.style.backgroundSize = 'contain'; // Ensure the image fits
        el.style.width = '30px'; // Set marker width
        el.style.height = '30px'; // Set marker height

        new mapboxgl.Marker(el, { offset: [0, 0] })
        .setLngLat([lng, lat])
        .addTo(map);
    
        return () => map.remove();

    }, [site3DMapRef, MAPBOX_KEY, lng, lat])

    return (

        <div className="div-map" id='div-site-map-3D'>
            {/* { loading && (<p>No map yet</p>)} */}

            <div ref={site3DMapRef} id='site-3d-map-ref'
            ></div>
        </div>

    )

}

/* --------------------------------Export--------------------------------*/

export default SiteMap3D