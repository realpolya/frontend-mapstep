/* --------------------------------Imports--------------------------------*/

import { useEffect, useState, useRef } from 'react';

import './HomeMap.css'
import { MAPBOX_KEY, mapboxStyle } from '../variables.js';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

/* --------------------------------Component--------------------------------*/


const HomeMap = () => {

    mapboxgl.accessToken = MAPBOX_KEY;

    const [loading, setLoading] = useState(true)
    const landingMapRef = useRef(null)

    useEffect(() => {

        if (!landingMapRef.current) {
            console.log('map container is not available at the moment')
            return;
        }

        setLoading(false)
        
        const map = new mapboxgl.Map({
            container: landingMapRef.current,
            style: mapboxStyle,
            center: [-98.5795, 39.8283], // starting position [lng, lat]. Note that lat must be set between -90 and 90
            zoom: 2.7
        });

        return () => map.remove();

    }, [landingMapRef, MAPBOX_KEY])


    return (
        <div id='div-home-map'>
            { loading && (<p>No map yet</p>)}

            <div ref={landingMapRef} id='home-map-ref'
            ></div>
        </div>
    )
}

/* --------------------------------Export--------------------------------*/

export default HomeMap