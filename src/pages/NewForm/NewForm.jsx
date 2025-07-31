/* --------------------------------Imports--------------------------------*/

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./NewForm.css";

import services from "../../services/index.js";

/* --------------------------------Variables--------------------------------*/

const initial = {

    title: "",
    // jurisdiction: "", // computed on back end
    address: "", // gathered from search result
    // street: "",
    // street_type: "" // computed on back end
    // etc...
}

/* --------------------------------Component--------------------------------*/

const NewForm = () => {

    const location = useLocation()
    const [formData, setFormData] = useState(initial)

    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.name]: e.value }))

    const handleSubmit = async (e) => {
        console.log("submitting")
    }

    useEffect(() => {

        if (location.state) {
            console.log(location.state.address)
            const queriedAddress = location.state.address
            setFormData({
                title: "",
                address: queriedAddress
            })
        }

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
                    name="address"
                    value={formData.address}
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