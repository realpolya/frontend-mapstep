/* --------------------------------Imports--------------------------------*/

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import "./Placeholder.css";

import { AppContext } from '../../App.jsx';

/* --------------------------------Component--------------------------------*/

const Placeholder = () => {

    const { user } = useContext(AppContext)



    return (
        <main>
            <h2>Hi there!</h2>
            <p>This little corner of mapStep has not been developed yet!</p>
            <p>Please check back in soon :)</p>
            <p>In the meantime:</p>
            <div>
                <button className="round-button">Go to home page</button>
                <button className="round-button">Learn about mapStep</button>
                { user ? (<button className="round-button">Go to dashboard</button>) : (null) }
            </div>
        </main>
    )

}

/* --------------------------------Export--------------------------------*/

export default Placeholder