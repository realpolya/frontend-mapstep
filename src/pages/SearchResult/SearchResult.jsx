/* --------------------------------Imports--------------------------------*/

import { useEffect, useState, createContext } from 'react';
import { useLocation } from 'react-router-dom';

import "./SearchResult.css"

import SearchInfo from "../../components/SearchInfo/SearchInfo.jsx"
import SiteMap3D from "../../components/maps/SiteMap/SiteMap3D.jsx"
import SiteMap2D from "../../components/maps/SiteMap/SiteMap2D.jsx"
import VicinityMap from "../../components/maps/VicinityMap/VicinityMap.jsx"

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
    let [siteDetails, setSiteDetails] = useState(dummyData)
    let location = useLocation()


    useEffect(() => {

        if (location.state) {
            setAddress(location.state.where)
        }

    }, [location.state])


    const searchObject = { address, siteDetails }

    return (
        <SearchContext.Provider value={searchObject}>
            <div className="flex flex-col p-4 h-full">
                
                <h1 className="h1-heading">Search Results for: <span className="italic">{address}</span></h1>
                <div className='flex md:flex-row flex-col'>
                    <div className="div-search-maps w-1/2 mr-4">
                        <SiteMap2D />
                        <h6 className="h6-map">site map 2D</h6>
                        <VicinityMap />
                        <h6 className="h6-map">vicinity map</h6>
                        <SiteMap3D />
                        <h6 className="h6-map">site map 3D</h6>
                    </div>
                    <div className="div-search-info w-1/2 h-full flex flex-col justify-between">
                        <SearchInfo />
                        <div>
                            <p className="text-center">to find out the potential and limitations <br></br>of this property, log in or sign up</p>
                            <div className="flex flex-row justify-center">
                                <button className="round-button">Log In</button>
                                <button className="round-button red-button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </SearchContext.Provider>
  )
}

/* --------------------------------Export--------------------------------*/

export default SearchResult
export { SearchContext }