/* --------------------------------Imports--------------------------------*/

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../../App.jsx';

import services from '../../services/index.js';

import HomeMap from "../../components/maps/HomeMap/HomeMap.jsx";

/* --------------------------------Component--------------------------------*/

const Home = () => {

    const { showSignUp, showLogIn, user } = useContext(AppContext)
    
    const navigate = useNavigate()

    const logOut = () => {

        services.signOut()
        navigate("/")
        window.location.reload()
        
    }

    return (
        <main className="padded-main">
            <h1 className="text-3xl">mapStep</h1>
            <p className="p-8 text-center">your primary tool in redlining architecture sets, decoding land laws<br></br> in the United States and streamlining permit acquisition.</p>
            <p className="italic font-extralight">locations serviced:</p>
            <HomeMap />

            { user ? (
                <div id="home-buttons" className="flex flex-row pt-2">
                    <button className="round-button" onClick={()=> logOut()}>Log Out</button>
                </div>
                ) : (
                <div id="home-buttons" className="flex flex-row pt-2">
                    <button className="round-button" onClick={()=> showLogIn(true)}>Log In</button>
                    <button className="round-button red-button" onClick={()=> showSignUp(true)}>Sign Up</button>
                </div>
            )}
        </main>
    )
    
}

/* --------------------------------Export--------------------------------*/

export default Home