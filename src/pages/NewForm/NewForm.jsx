/* --------------------------------Imports--------------------------------*/

import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// google maps  api
import { Autocomplete } from "@react-google-maps/api";

import "./NewForm.css";

import services from "../../services/index.js";
import { getGoogleFormat } from "../../components/allpages/NavBar.jsx";

/* --------------------------------Variables--------------------------------*/

const initial = {

    title: "",
    street: "", // gathered from search result - HAS TO BE STREET
    description: ""

    // jurisdiction: "", // computed on back end
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

        // convert google object to a readable string
        const addressString = `${addrDetails.street_number} ${addrDetails.route}`

        setFormData(prev => ({ ...prev, street: addressString }))

        // navigate("/result", { state: { addrDetails }})

    }


    useEffect(() => {

        if (location?.state?.addrDetails) {
            // console.log("detail Addr is ", location.state.addrDetails)
            setAddress(`${location.state.addrDetails.street_number} ${location.state.addrDetails.route}`);
            navigate(location.pathname, { replace: true, state: null });
        }

    }, [location.state])


    useEffect(() => {

        // console.log("in newForm, location.state.address is ", location?.state?.address)

        // 
        // if (location?.state?.addrDetails) {
        //     // console.log("detail Addr is ", location.state.addrDetails)
        //     setAddress(`${location.state.addrDetails.street_number} ${location.state.addrDetails.route}`);
        //     navigate(location.pathname, { replace: true, state: null });
        // }

        // obtain address from navbar
        if (location.state && location.state.address) {
            setFormData({
                title: "",
                street: location.state.address || ""
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
                    placeholder="project title..."
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
                        className="w-full"
                    >
                        <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        placeholder="address..."
                        className="new-form-input"
                        />
                    </Autocomplete>
                </div>

                <div className="new-form-div" id="new-form-notes">
                    <label className="new-form-label">
                        Notes:
                    </label>
                    <textarea
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="project description..."
                    className="new-form-input"
                    />
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