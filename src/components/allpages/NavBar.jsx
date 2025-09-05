/* --------------------------------Imports--------------------------------*/

import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

// google maps  api
import { LoadScript, Autocomplete } from "@react-google-maps/api";

import "./allpages.css"

import SideBar from './SideBar.jsx';

/* --------------------------------Variables--------------------------------*/

const libraries = ['places']

const addressTemplate = {
    "street_number": "",
    "route": "",
    "locality": "",
    "administrative_area_level_1": ""
}

/* --------------------------------Functions--------------------------------*/

const getGoogleFormat = place => {

    if (!place.address_components) return;
    
    const addrDetails = place.address_components.reduce((arg, component) => {
    
        Object.keys(addressTemplate).forEach(key => {
            if (component.types.includes(key)) {
                arg[key] = component.long_name
            }
        });
        return arg;
    
    }, {});

    return addrDetails

}

/* --------------------------------Component--------------------------------*/

const NavBar = () => {

    // google maps ref, side bar ref
    const autocompleteRef = useRef(null)
    const navbarRef = useRef(null)

    const navigate = useNavigate()
    const location = useLocation()

    const [inputValue, setInputValue] = useState('')
    const [sideOpen, setSideOpen] = useState(false)
    // const [detailAddr, setDetailAddr] = useState(addressTemplate)

    // side menu
    const handleClickOut = e =>  {
        if (navbarRef.current && !navbarRef.current.contains(e.target)) setSideOpen(false);
    }

    // side menu open and close
    useEffect(() => {

        if (!sideOpen) return;

        document.addEventListener("mousedown", handleClickOut)

        return () => {
            document.removeEventListener("mousedown", handleClickOut)
        }

    }, [sideOpen])

    useEffect(() => {

        if (sideOpen) setSideOpen(false)

    }, [location.pathname])


    // google maps autocomplete handle change
    const handlePlaceChange = () => {

        console.log("selected place ", autocompleteRef.current.getPlace())
        const place = autocompleteRef.current.getPlace()

        // if (!place.address_components) return;

        // const addrDetails = place.address_components.reduce((arg, component) => {

        //     Object.keys(addressTemplate).forEach(key => {
        //         if (component.types.includes(key)) {
        //             arg[key] = component.long_name
        //         }
        //     });
        //     return arg;

        // }, {});

        const addrDetails = getGoogleFormat(place)

        if (!addrDetails) return

        setInputValue("")

        navigate("/result", { state: { addrDetails }})

    }

    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}
            libraries={libraries}
        >

            <nav className="flex flex-col">

                <div className="navbar-div">
                    
                    <NavLink to="/" className="text-blueColor pl-4 text-2xl flex flex-row justify-center items-center">
                        <img src="/logo.png" className="w-20 h-20 mr-2 mt-1"/>
                        <p className="hidden md:block">mapStep</p>
                    </NavLink>
                    <div className="flex flex-row w-1/2">
                        <p className="pr-2 w-1/4">lot address</p>
                        <Autocomplete
                            className="nav-searchbar w-3/4"
                            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
                            onPlaceChanged={handlePlaceChange}
                        >
                            <input
                                className="rounded-xl border-2 border-solid pl-2 w-full"
                                type="text"
                                placeholder=''
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                            ></input>
                        </Autocomplete>
                    </div>
                    <div className="side-menu-div h-[50%] pr-4 flex flex-col">
                    
                        <button className="bg-transparent border-none h-[100%]" onClick={() => setSideOpen(!sideOpen)}>
                            <img id="nav-menu-img" className="h-[100%]" src="/reshot_menu.svg"/>
                        </button>

                    </div>

                </div>

                {sideOpen ? (
                    
                    <nav ref={navbarRef} className="absolute top-20 md:right-2 right-2 w-1/8 translate-y-0">

                        <SideBar/>

                    </nav>

                ) : null}


            </nav>

        </LoadScript>
    )
}

/* --------------------------------Export--------------------------------*/

export default NavBar
export { getGoogleFormat }