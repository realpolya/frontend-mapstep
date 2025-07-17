/* --------------------------------Imports--------------------------------*/

import { useEffect, useState, createContext, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import "./SearchResult.css";

import SearchInfo from "../../components/SearchInfo/SearchInfo.jsx";
import SiteMap3D from "../../components/maps/SiteMap/SiteMap3D.jsx";
import SiteMap2D from "../../components/maps/SiteMap/SiteMap2D.jsx";
import VicinityMap from "../../components/maps/VicinityMap/VicinityMap.jsx";

import App, { AppContext } from '../../App.jsx';

// back end
import services from '../../services/index.js';

/* --------------------------------Context--------------------------------*/

// const SearchContext = createContext(null);

const dummyData = {
    "latitude": 34.0620051,
    "longitude": -118.3431566,
    "data": {
        "LandWidth": 280,
        "LandDepth": 504,
        "YearBuilt": 2016
    }
}

/* --------------------------------Component--------------------------------*/

const SearchResult = () => {

    const [address, setAddress] = useState('')
    const [siteDetails, setSiteDetails] = useState(dummyData)
    const [lotGeom, setLotGeom] = useState() // undefined

    const location = useLocation()
    const navigate = useNavigate()

    const { user } = useContext(AppContext)

    useEffect(() => {

        if (location?.state?.addrDetails) {
            // console.log("detail Addr is ", location.state.addrDetails)
            setAddress(`${location.state.addrDetails.street_number} ${location.state.addrDetails.route}`);
            navigate(location.pathname, { replace: true, state: null });
        }

    }, [location.state])

    useEffect(() => {

        fetchData(address)

    }, [address])

    useEffect(() => {

        if (siteDetails?.data?.parcel_geometry) {
            setLotGeom(siteDetails?.data?.parcel_geometry)
            console.log(siteDetails?.data?.parcel_geometry)
        }

    }, [siteDetails])


    const fetchData = async (address) => {

        const newData = await services.getAddress(address)
        // console.log("new data is ", newData)
        setSiteDetails(newData)
        console.log("site details become this...", newData)

    }

    const unauthButtons = (
        <div>
            <p className="text-center">to find out the potential and limitations <br></br>of this property, log in or sign up</p>
            <div className="flex flex-row justify-center">
                <button className="round-button">Log In</button>
                <button className="round-button red-button">Sign Up</button>
            </div>
        </div>
    )

    const authButtons = (
        <div className="flex flex-row justify-center">
            <button className="round-button red-button">
                Save as a project
            </button>
        </div>
    )

    // const searchObject = { address, siteDetails }

    return (
        // <SearchContext.Provider value={searchObject}>
            <div className="flex flex-col p-4 h-full">
                
                <h1 className="h1-heading">Search Results for: <span className="italic">{address}</span></h1>
                <div className='flex md:flex-row flex-col'>

                    {/* rendering of maps below is DEPENDENT on fetching lotGeom */}
                    <div className="div-search-maps w-full md:w-1/2 mr-4">
                        <SiteMap2D siteDetails={siteDetails} lotGeom={lotGeom}/>
                        {lotGeom && <h6 className="h6-map">site map 2D</h6>}
                        <VicinityMap siteDetails={siteDetails} lotGeom={lotGeom}/>
                        {lotGeom && <h6 className="h6-map">vicinity map</h6>}
                        <SiteMap3D siteDetails={siteDetails} lotGeom={lotGeom}/>
                        {lotGeom && <h6 className="h6-map">site map 3D</h6>}
                    </div>
                    <div className="div-search-info w-full md:w-1/2 h-full flex flex-col justify-between">
                        <SearchInfo siteDetails={siteDetails} address={address}/>
                        { user ? authButtons : unauthButtons }
                    </div>
                </div>
                
            </div>
        // </SearchContext.Provider>
  )
}

/* --------------------------------Export--------------------------------*/

export default SearchResult
// export { SearchContext }