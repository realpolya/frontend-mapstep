/* --------------------------------Imports--------------------------------*/

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


import SearchInfo from "../components/SearchInfo.jsx"
import SiteMap3D from "../components/maps/SiteMap/SiteMap3D.jsx"
import SiteMap2D from "../components/maps/SiteMap/SiteMap2D.jsx"
import VicinityMap from "../components/maps/VicinityMap/VicinityMap.jsx"

/* --------------------------------Component--------------------------------*/

const SearchResult = () => {

    let [address, setAddress] = useState('')
    let location = useLocation()


    useEffect(() => {

        if (location.state) {
            setAddress(location.state.where)
        }

    }, [location.state])

    
    return (
    <div>
        <h1>Search Results for: [address here]</h1>
        <div className="div-search-maps">
            <SiteMap2D />
            <VicinityMap />
            <SiteMap3D />
        </div>
        <div className="div-search-info">
            <SearchInfo />
            <div>
                <p>to find out the potential and limitations of this property, log in or sign up</p>
                <div>
                    <button>Log In</button>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

/* --------------------------------Export--------------------------------*/

export default SearchResult