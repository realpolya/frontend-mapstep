/* --------------------------------Imports--------------------------------*/

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import "./Placeholder.css";

import { AppContext } from '../../App.jsx';

/* --------------------------------Component--------------------------------*/

const Placeholder = () => {

    const { user } = useContext(AppContext)



    return (
        <main className="placeholder-main">
            <div className="flex flex-col sm:flex-row w-full items-center justify-between pb-12">
                <div className="sm:w-1/2">
                    <h1 className="h1-heading">Hi there!</h1>
                    <p>This little corner of <span className="text-blueColor">mapStep</span> has not been developed yet!</p>
                    <p className="pb-12">Please check back in soon :)</p>
                </div>
                <img src="/logo.png" className="w-60 h-60 mr-2 mt-1"/>
            </div>
            <p>In the meantime...</p>
            <div>
                <button className="round-button red-button">Go to home page</button>
                <button className="round-button">Learn about mapStep</button>
                { user ? (<button className="round-button">Go to dashboard</button>) : (null) }
            </div>
        </main>
    )

}

/* --------------------------------Export--------------------------------*/

export default Placeholder