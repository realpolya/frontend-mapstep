/* --------------------------------Imports--------------------------------*/

import { useContext, useEffect, useState, useRef } from 'react';

// import { SearchContext } from '../../../pages/SearchResult/SearchResult.jsx';

import './VicinityMap.css'
import { MAPBOX_KEY, mapboxStyle } from '../variables.js';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

/* --------------------------------Component--------------------------------*/

const VicinityMap = ({ siteDetails, lotGeom }) => {

    // const { address, siteDetails } = useContext(SearchContext)

    mapboxgl.accessToken = MAPBOX_KEY;

    const [loading, setLoading] = useState(true)
    const [lat, setLat] = useState(40.7128)
    const [lng, setLng] = useState(-74.0060)

    const vicinityMapRef = useRef(null)

    useEffect(() => {

        if (siteDetails && siteDetails.longitude) {
            
            setLat(siteDetails.latitude)
            setLng(siteDetails.longitude)
            // setLoading(false)

        }

        if (lotGeom) setLoading(false)

    }, [siteDetails, lotGeom])


    useEffect(() => {

        if (!vicinityMapRef.current) {
            console.log('map container is not available at the moment')
            return;
        }

        // setLoading(false)
        if (loading) return;

        console.log("past loading on vicinity map")
        
        const map = new mapboxgl.Map({
            container: vicinityMapRef.current,
            style: mapboxStyle,
            center: [lng, lat], // starting position [lng, lat]. Note that lat must be set between -90 and 90
            zoom: 12
        });

        // add marker
        const el = document.createElement('div')

        el.style.backgroundImage = `url('/reshot-location.svg')`; // Set the PNG image
        el.style.backgroundSize = 'contain'; // Ensure the image fits
        el.style.width = '20px'; // Set marker width
        el.style.height = '20px'; // Set marker height

        new mapboxgl.Marker(el, { offset: [0, 0] })
        .setLngLat([lng, lat])
        .addTo(map);

        return () => map.remove();

    }, [vicinityMapRef, MAPBOX_KEY, lng, lat, loading])

    return (
        <div className="div-map" id='div-vicinity-map'>
            {/* { loading && (<p>No map yet</p>)} */}

            <div ref={vicinityMapRef} id='vicinity-map-ref'
            ></div>
        </div>
    )
}

/* --------------------------------Export--------------------------------*/

export default VicinityMap