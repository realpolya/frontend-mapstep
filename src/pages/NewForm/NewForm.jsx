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
        <main>
            NewForm
            <form>
            
            </form>
        </main>
    )

}

/* --------------------------------Export--------------------------------*/

export default NewForm