/* --------------------------------Imports--------------------------------*/

import { useEffect, useState, createContext } from 'react';
import { useLocation } from 'react-router-dom';


import SearchInfo from "../components/SearchInfo.jsx"
import SiteMap3D from "../components/maps/SiteMap/SiteMap3D.jsx"
import SiteMap2D from "../components/maps/SiteMap/SiteMap2D.jsx"
import VicinityMap from "../components/maps/VicinityMap/VicinityMap.jsx"

/* --------------------------------Context--------------------------------*/

const SearchContext = createContext(null);

const dummyData = {
    "latitude": 34.0620051,
    "longitude": -118.3431566,
    "lot_width": 280,
    "lot_depth": 504
}

/* --------------------------------Component--------------------------------*/

const SearchResult = () => {

    let [address, setAddress] = useState('1234 Moon')
    let location = useLocation()


    useEffect(() => {

        if (location.state) {
            setAddress(location.state.where)
        }

    }, [location.state])


    const searchObject = { address }

    return (
        <SearchContext.Provider value={searchObject}>
            <div>
                
                <h1>Search Results for: {address}</h1>
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
        </SearchContext.Provider>
  )
}

/* --------------------------------Export--------------------------------*/

export default SearchResult