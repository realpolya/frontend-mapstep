/* --------------------------------Imports--------------------------------*/

import { Link } from 'react-router-dom'

import "./About.css"

/* --------------------------------Component--------------------------------*/

const About = () => {

    return (

        <main className="normal-main flex flex-col items-center">
            <h1 className="h1-heading">About mapStep</h1>
            <div className="flex flex-col w-full items-center">
                <div className="about-text-img-div">
                    <p><span className="font-medium">mapStep</span> was created
                        by <a className="red-link" href="https://www.linkedin.com/in/realpolya/">Polina Stepanova</a> as
                        an efficiency and organization tool for architects,
                        real estate developers, contractors, civil engineers, and urban planners.
                    </p>
                    <img src="/polina.jpg" className="w-[200px] rounded-full"/>
                </div>
                <div className="about-text-img-div">
                    <img src="/sketches.png" className="w-[400px] rounded-full"/>
                    <p>lovely</p>
                </div>
            </div>

        </main>

    )
}

/* --------------------------------Export--------------------------------*/

export default About