/* --------------------------------Imports--------------------------------*/

import { useContext, useEffect, useState, useRef } from 'react';

import './SiteMap.css'
import { MAPBOX_KEY, mapboxStyle } from '../variables.js';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


/* --------------------------------Component--------------------------------*/


const SiteMap2D = () => {

    mapboxgl.accessToken = MAPBOX_KEY;

    const [loading, setLoading] = useState(true)
    const site2DMapRef = useRef(null)

    useEffect(() => {

        if (!site2DMapRef.current) {
            console.log('map container is not available at the moment')
            return;
        }

        setLoading(false)
        
        const map = new mapboxgl.Map({
            container: site2DMapRef.current,
            style: mapboxStyle,
            center: [-98.5795, 39.8283], // starting position [lng, lat]. Note that lat must be set between -90 and 90
            zoom: 2.7
        });

        return () => map.remove();

    }, [site2DMapRef, MAPBOX_KEY])

    return (
        <div id='div-site-map-2D'>
            { loading && (<p>No map yet</p>)}

            <div ref={site2DMapRef} id='site-2d-map-ref'
            ></div>
        </div>
    )
}

/* --------------------------------Export--------------------------------*/

export default SiteMap2D