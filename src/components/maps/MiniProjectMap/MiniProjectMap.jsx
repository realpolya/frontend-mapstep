/* --------------------------------Imports--------------------------------*/

import { useEffect, useState, useRef } from 'react';

import "./MiniProjectMap.css"
import { MAPBOX_KEY, mapboxStyle } from '../variables.js';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

/* --------------------------------Component--------------------------------*/

const MiniProjectMap = ({ project }) => {

    mapboxgl.accessToken = MAPBOX_KEY;

    const [loading, setLoading] = useState(true)
    const [lat, setLat] = useState(40.7128)
    const [lng, setLng] = useState(-74.0060)

    const projectMapRef = useRef(null)

    useEffect(() => {

        if (project && project.longitude) {
            
            setLat(project.latitude)
            setLng(project.longitude)
            setLoading(false)

        }

    }, [project])

    useEffect(() => {

        if (!projectMapRef.current) {
            console.log('map container is not available at the moment')
            return;
        }

        setLoading(false)
        
        const map = new mapboxgl.Map({
            container: projectMapRef.current,
            style: mapboxStyle,
            center: [lng, lat], // starting position [lng, lat]. Note that lat must be set between -90 and 90
            zoom: 12
        });

        return () => map.remove();

    }, [projectMapRef, MAPBOX_KEY, lng, lat])

    return (
        <div className="div-map" id='div-mini-project-map'>
            { loading && (<p>No map yet</p>)}

            <div ref={projectMapRef} id='mini-project-map-ref'
            ></div>
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default MiniProjectMap