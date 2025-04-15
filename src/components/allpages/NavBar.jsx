/* --------------------------------Imports--------------------------------*/

import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';

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

/* --------------------------------Component--------------------------------*/

const NavBar = () => {

    const autocompleteRef = useRef(null)
    const navbarRef = useRef(null)

    const navigate = useNavigate()

    const [inputValue, setInputValue] = useState('')
    const [sideOpen, setSideOpen] = useState(false)
    // const [detailAddr, setDetailAddr] = useState(addressTemplate)

    // side menu
    const handleClickOut = e =>  {
        if (navbarRef.current && !navbarRef.current.contains(e.target)) setSideOpen(false);
    }

    

    // google maps autocomplete handle change
    const handlePlaceChange = () => {

        console.log("selected place ", autocompleteRef.current.getPlace())
        const place = autocompleteRef.current.getPlace()

        if (!place.address_components) return;

        const addrDetails = place.address_components.reduce((arg, component) => {

            Object.keys(addressTemplate).forEach(key => {
                if (component.types.includes(key)) {
                    arg[key] = component.long_name
                }
            });
            return arg;

        }, {});

        setInputValue("")

        navigate("/result", { state: { addrDetails }})

    }

    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}
            libraries={libraries}
        >

            <nav id="navbar-tw">
                <Link to="/" className="text-blueColor pl-4 text-2xl">mapStep</Link>
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

                <img id="nav-menu-img" className="h-[50%] pr-4" src="/reshot_menu.svg"/>
            </nav>

        </LoadScript>
    )
}

/* --------------------------------Export--------------------------------*/

export default NavBar