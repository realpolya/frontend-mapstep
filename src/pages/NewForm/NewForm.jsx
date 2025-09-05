/* --------------------------------Imports--------------------------------*/

import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// google maps  api
import { LoadScript, Autocomplete } from "@react-google-maps/api";

import "./NewForm.css";

import services from "../../services/index.js";
import { getGoogleFormat } from "../../components/allpages/NavBar.jsx";

/* --------------------------------Variables--------------------------------*/

const libraries = ['places']

const initial = {

    title: "",
    // jurisdiction: "", // computed on back end
    street: "", // gathered from search result - HAS TO BE STREET
    // street: "",
    // street_type: "" // computed on back end
    // etc...
}

/* --------------------------------Component--------------------------------*/

const NewForm = () => {

    const autocompleteFormRef = useRef(null)

    const location = useLocation()
    const navigate = useNavigate()

    const [formData, setFormData] = useState(initial)
    const [googleAddy, setGoogleAddy] = useState('')


    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const handleSubmit = async (e) => {

        e.preventDefault()
        console.log("sending the following info", formData)
        
        try {
            
            await services.postProject(formData)
            navigate("/dashboard", { state: { message: "project successfully created" }})

        } catch (err) {

            console.log(err.response.data.error)
            alert(err)

        }
    }

    const handlePlaceChange = () => {

        console.log("selected place ", autocompleteFormRef.current.getPlace())
        const place = autocompleteFormRef.current.getPlace()

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

        setGoogleAddy(addrDetails)

        // navigate("/result", { state: { addrDetails }})

    }

    useEffect(() => {

        // obtain address from navbar
        if (location.state && location.state.address) {
            setFormData({
                title: "",
                street: location.state.address
            })
        }

        // TODO: add Google Maps search to the address input

    }, [location.state])
    
    return (

        <main className="padded-main new-form-main">
            <h2 className="text-2xl pb-4">New Project</h2>
            <form
            onSubmit={handleSubmit} className="w-full flex flex-col items-center"
            >
                <div className="new-form-div">
                    <label className="new-form-label">
                        Title:
                    </label>
                    <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="your project title..."
                    className="new-form-input"
                    />
                </div>
                <div className="new-form-div">
                    <label className="new-form-label">
                        Address:
                    </label>
                    <Autocomplete
                        onLoad={(autocomplete) => (autocompleteFormRef.current = autocomplete)}
                        onPlaceChanged={handlePlaceChange}
                    >
                        <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        placeholder=""
                        className="new-form-input"
                        />
                    </Autocomplete>

                </div>
                <button type="submit" className="round-button new-form-button">
                    Save project
                </button>
            </form>
        </main>

    )

}

/* --------------------------------Export--------------------------------*/

export default NewForm