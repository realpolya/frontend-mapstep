/* --------------------------------Imports--------------------------------*/

import { useState, useEffect } from "react"

import "./NewForm.css"

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


    
    return (
        <main>
            NewForm
        </main>
    )

}

/* --------------------------------Export--------------------------------*/

export default NewForm