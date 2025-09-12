/* --------------------------------Imports--------------------------------*/

import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";

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

    const { projectId } = useParams()

    const autocompleteFormRef = useRef(null)

    const location = useLocation()
    const navigate = useNavigate()

    const [formData, setFormData] = useState(initial)
    const [googleAddy, setGoogleAddy] = useState('')
    const [editMode, setEditMode] = useState(false)


    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handlePlaceChange = () => {

        console.log("selected place ", autocompleteFormRef.current.getPlace())
        const place = autocompleteFormRef.current.getPlace()

        const addrDetails = getGoogleFormat(place)

        if (!addrDetails) return

        setGoogleAddy(addrDetails)

        // convert google object to a readable string
        const addressString = `${addrDetails.street_number} ${addrDetails.route}`

        setFormData(prev => ({ ...prev, street: addressString }))

    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        
        try {
            
            await services.postProject(formData)
            navigate("/dashboard", { state: { message: "project successfully created" }})

        } catch (err) {

            console.log(err.response.data.error)
            alert(err)

        }
    }

    const handleEdit = async (e) => {

        e.preventDefault()

        try {
            
            await services.putProject(projectId, formData)
            navigate("/dashboard", { state: { message: "project successfully updated" }})

        } catch (err) {

            console.log(err.response.data.error)
            alert(err)

        }

    }


    useEffect(() => {

        // obtain address from navbar
        if (location.state && location.state?.address) {
            setFormData({
                title: "",
                street: location.state.address || ""
            })
        }

        if (location.state && location.state?.siteDetails) {
            // this indicates editing
            setEditMode(true)

            setFormData({
                title: location.state.siteDetails.title,
                street: location.state.siteDetails.address,
                description: location.state.siteDetails.description
            })
        } else {
            setEditMode(false)
        }

    }, [location.state])
    
    
    return (

        <main className="padded-main new-form-main">

            <div className="flex flex-row items-end">
                {editMode ? (
                        <h2 className="new-form-h2">Edit Project</h2>
                    ):(
                        <h2 className="new-form-h2">New Project</h2>
                    )
                }
                <Link to="/dashboard" className="red-link text-center">to dashboard</Link>
            </div>

            <form
                onSubmit={editMode ? handleEdit : handleSubmit} 
                className="w-full flex flex-col items-center pt-4"
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

                <button type="submit" 
                    className="round-button new-form-button"
                >
                    Save project
                </button>

            </form>

        </main>

    )

}

/* --------------------------------Export--------------------------------*/

export default NewForm