/* --------------------------------Imports--------------------------------*/

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./NewForm.css";

import services from "../../services/index.js";

/* --------------------------------Variables--------------------------------*/

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

    const location = useLocation()
    const navigate = useNavigate()

    const [formData, setFormData] = useState(initial)

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        console.log("submitting")
        try {
            
            await services.postProject(formData)
            navigate("/dashboard", { state: { message: "project successfully created" }})

        } catch (err) {

            console.log(err.response.data.error)
            alert(err)

        }
    }

    useEffect(() => {

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
                    <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    placeholder=""
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