/* --------------------------------Imports--------------------------------*/

import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// google maps  api
import { LoadScript, Autocomplete } from "@react-google-maps/api";

import "./allpages.css"

/* --------------------------------Variables--------------------------------*/

const libraries = ['places']

/* --------------------------------Component--------------------------------*/

const NavBar = () => {

    const navigate = useNavigate()

    const [formAddress, setFormAddress] = useState("")

    const handleWhere = e => setFormAddress(e.target.value)
    const handleSubmit = e => {

        console.log("form address is ", formAddress)
        e.preventDefault();
        navigate("/result", { state: { formAddress }})
        setFormAddress('')

    }

    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}
            libraries={libraries}
        >
            <nav id="navbar-tw">
                <Link to="/" className="text-blueColor pl-4 text-2xl">mapStep</Link>
                <form className="nav-searchbar" onSubmit={handleSubmit}>
                    <label className="pr-2">lot address</label>
                    <input
                        className="rounded-xl border-2 border-solid pl-2"
                        value={formAddress}
                        onChange={handleWhere}
                    ></input>
                    <button type="submit" className="hidden">Submit</button>
                </form>
                <img id="nav-menu-img" className="h-[50%] pr-4" src="/reshot_menu.svg"/>
            </nav>
        </LoadScript>
    )
}

/* --------------------------------Export--------------------------------*/

export default NavBar