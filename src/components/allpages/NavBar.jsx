/* --------------------------------Imports--------------------------------*/

import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// google maps  api
import { LoadScript, Autocomplete } from "@react-google-maps/api";

import "./allpages.css"

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

    const navigate = useNavigate()

    const [formAddress, setFormAddress] = useState("")
    const [detailAddr, setDetailAddr] = useState(addressTemplate)

    const handleWhere = e => setFormAddress(e.target.value)
    // const handleSubmit = e => {

    //     console.log("form address is ", formAddress)
    //     e.preventDefault();
    //     navigate("/result", { state: { formAddress }})
    //     setFormAddress('')

    // }
    const handlePlaceChange = () => {

        console.log("form address is ", formAddress)
        console.log("selected place ", autocompleteRef.current.getPlace())

        const place = autocompleteRef.current.getPlace()

        if (place.address_components) {

            let newDetails = place.address_components.reduce((arg, component) => {

                Object.keys(addressTemplate).forEach(key => {
                    if (component.types.includes(key)) {
                        arg[key] = component.long_name
                    }
                });
                return arg;

            }, {});

            console.log("new details are ", newDetails)

            setDetailAddr(newDetails)

        }

        navigate("/result", { state: { formAddress, detailAddr }})
        setFormAddress('')
        setDetailAddr(addressTemplate)

    }

    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}
            libraries={libraries}
        >

            <nav id="navbar-tw">
                <Link to="/" className="text-blueColor pl-4 text-2xl">mapStep</Link>
                <form className="flex flex-row w-1/2">
                    <label className="pr-2 w-1/4">lot address</label>
                    <Autocomplete 
                        className="nav-searchbar w-3/4"
                        onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
                        onPlaceChanged={handlePlaceChange}
                    >
                        <input
                            className="rounded-xl border-2 border-solid pl-2 w-full"
                            value={formAddress}
                            onChange={handleWhere}
                            type="text"
                            placeholder=''
                        ></input>
                    </Autocomplete>
                    <button className="hidden">submit</button>
                </form>

                <img id="nav-menu-img" className="h-[50%] pr-4" src="/reshot_menu.svg"/>
            </nav>

        </LoadScript>
    )
}

/* --------------------------------Export--------------------------------*/

export default NavBar