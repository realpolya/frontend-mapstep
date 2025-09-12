/* --------------------------------Imports--------------------------------*/

import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './FAQ.css'

import { AppContext } from '../../App.jsx'

/* --------------------------------Varibles--------------------------------*/

const Q_NUM = 1

/* --------------------------------Component--------------------------------*/

const FAQ = () => {

    const { user } = useContext(AppContext)

    const [qArray, setQArray] = useState([])

    // button function
    const updateBool = i => {

        let newArr = [...qArray]

        if (newArr[i]) {
            newArr[i] = false
        } else {
            newArr[i] = true
        }

        setQArray(newArr)
        
    }

    // upon loading
    useEffect(() => {

        let newArr = []

        for (let i = 0; i < Q_NUM; i++) {
            newArr[i] = false
        }

        setQArray(newArr)

    }, [])

    return (

        <main className="normal-main">
            <div className="flex flex-row items-end pb-6">
                <h1 className="h1-heading-v2">Frequently Asked Questions</h1>
                { user ? (<Link className="red-link text-center" to="/dashboard">to dashboard</Link>) : (null) }
            </div>
            <div>
                <div id="div-faq-1" className="faq-dropdown-div">
                    <button className="faq-dropdown-btn" onClick={() => {updateBool(1)}}>↓ What do you want to see?</button>
                    { qArray[1] ? (<p className="faq-answer-p">love everywhere</p>) : (null) }
                </div>
                <div id="div-faq-2" className="faq-dropdown-div">
                    <button className="faq-dropdown-btn" onClick={() => {updateBool(2)}}>↓ What do you want to see?</button>
                    { qArray[2] ? (<p className="faq-answer-p">love everywhere</p>) : (null) }
                </div>
            </div>
        </main>

    )

}

/* --------------------------------Export--------------------------------*/

export default FAQ