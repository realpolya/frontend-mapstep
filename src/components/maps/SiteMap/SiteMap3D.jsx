/* --------------------------------Imports--------------------------------*/

import { useContext, useEffect, useState, useRef } from 'react';

import { SearchContext } from '../../../pages/SearchResult.jsx';

import './SiteMap.css'
import { MAPBOX_KEY, mapboxStyle } from '../variables.js';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

/* --------------------------------Component--------------------------------*/

const SiteMap3D = () => {

    const { address, siteDetails } = useContext(SearchContext)

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

        setLoading(false)
        
        const map = new mapboxgl.Map({
            container: site3DMapRef.current,
            style: mapboxStyle,
            center: [lng, lat], // starting position [lng, lat]. Note that lat must be set between -90 and 90
            zoom: 15,
            pitch: 30,
            bearing: -17.6
        });

        return () => map.remove();

    }, [site3DMapRef, MAPBOX_KEY, lng, lat])

    return (
        <div id='div-site-map-3D'>
            { loading && (<p>No map yet</p>)}

            <div ref={site3DMapRef} id='site-3d-map-ref'
            ></div>
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default SiteMap3D