/* --------------------------------Imports--------------------------------*/

import { useEffect, useState, useRef } from 'react';

import './HomeMap.css'
import { MAPBOX_KEY, mapboxStyle } from '../variables.js';

import locations from "../../../pages/Home/locations.js";

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

        // add marker for the property
        const el = document.createElement('div')

        el.style.backgroundImage = `url('/reshot-location.svg')`; // Set the PNG image
        el.style.backgroundSize = 'contain'; // Ensure the image fits
        el.style.width = '30px'; // Set marker width
        el.style.height = '30px'; // Set marker height

        locations.map(location => {
            return new mapboxgl.Marker(el, { offset: [0, 0] })
            .setLngLat([location.lng, location.lat])
            .addTo(map);
        })

        // console.log("lat and long", [locations[0].lng, locations[0].lat])

        // new mapboxgl.Marker(el, { offset: [0, 0] })
        // .setLngLat([locations[0].lng, locations[0].lat])
        // .addTo(map);

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