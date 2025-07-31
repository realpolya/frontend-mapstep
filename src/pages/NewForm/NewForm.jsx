/* --------------------------------Imports--------------------------------*/

import { useState, useEffect } from "react"

import "./NewForm.css"

import services from "../../services/index.js"

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

    const [formData, setFormData] = useState(initial)

    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.name]: e.value }))

    const handleSubmit = async (e) => {
        console.log("submitting")
    }
    
    return (
        <main className="flex flex-col justify-center items-center">
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
                    placeholder=""
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