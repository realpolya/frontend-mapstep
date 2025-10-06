/* --------------------------------Imports--------------------------------*/

import { Link } from 'react-router-dom'

import "./About.css"

/* --------------------------------Component--------------------------------*/

const About = () => {

    return (

        <main className="normal-main flex flex-col items-center">
            <h1 className="h1-heading">about mapStep</h1>
            <div className="flex flex-col w-full items-center pb-12">
                <div className="about-text-img-div">
                    <p className="pr-4"><span className="mapstep-span">mapStep</span> was created
                        by <a className="red-link" href="https://www.linkedin.com/in/realpolya/">Polina Stepanova</a> as
                        an efficiency and organization tool for architects,
                        real estate developers, contractors, civil engineers, and urban planners.<br/>
                        <br/>
                        We strive to support creating better architecture with clarity, speed, and creativity. We want to maximize productivity
                        and increase ROI from each development project.
                    </p>
                    <img src="/polina.jpg" className="md:w-[200px] w-[150px] rounded-full"/>
                </div>
                <div className="about-text-img-div">
                    <img src="/sketches.png" className="md:w-[300px] w-[250px] rounded-full"/>
                    <p className="pl-4">The application intends to serve as a centralized database for obtaining
                        zoning, planning, and building code information for each individual 
                        plot of land across the United States. The building code information 
                        has been unneccesarily bureaucratic and disjointed – mapStep was created 
                        out of an aspiration to fix the system and streamline the design and construction-related
                        processes.
                    </p>
                </div>
                <div className="about-text-img-div">
                    <p className="pr-4">Based on Los Angeles as a sample city and utilizing 
                        public <a className="red-link" href="https://portal.assessor.lacounty.gov/">Los Angeles County Assessor's portal</a> as 
                        the primary API endpoint, <span className="mapstep-span">mapStep</span> enhances the permit acquisition process and broadens the 
                        imagination horizon by suggesting construction possibilities. The lot research
                        is significantly augmented and explanded with AI technologies.
                        <br/>
                        <br/>
                        <a href="mailto:realpolya@gmail.com" className="italic red-link">contact us for inquiries</a>
                    </p>
                    <img src="/sketch.jpg" className="w-[200px] rounded-full"/>
                </div>
            </div>

        </main>

    )
}

/* --------------------------------Export--------------------------------*/

export default About