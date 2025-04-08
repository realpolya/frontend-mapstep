/* --------------------------------Imports--------------------------------*/

import { useContext, useEffect, useState, useRef } from 'react';

import { SearchContext } from '../../../pages/SearchResult.jsx';

import './SiteMap.css'
import { MAPBOX_KEY, mapboxStyle } from '../variables.js';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

/* --------------------------------Component--------------------------------*/

const SiteMap2D = () => {

    const { address, siteDetails } = useContext(SearchContext)

    mapboxgl.accessToken = MAPBOX_KEY;

    const [loading, setLoading] = useState(true)
    const [lat, setLat] = useState(40.7128)
    const [lng, setLng] = useState(-74.0060)

    const site2DMapRef = useRef(null)

    useEffect(() => {

        if (siteDetails && siteDetails.longitude) {
            
            setLat(siteDetails.latitude)
            setLng(siteDetails.longitude)
            setLoading(false)

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
            zoom: 15
        });

        return () => map.remove();

    }, [site2DMapRef, MAPBOX_KEY, lng, lat])

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