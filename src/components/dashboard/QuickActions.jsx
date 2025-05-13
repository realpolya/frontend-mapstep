/* --------------------------------Imports--------------------------------*/

import { Link } from "react-router-dom";

/* --------------------------------Component--------------------------------*/

const QuickActions = () => {

    return (
        <div className="pt-8">
            <h4>quick actions</h4>
            <div className="flex flex-col justify-between">
                <div className="three-button-div">
                    <button className="account-button" onClick={() => navigate("/")}>start new project</button>
                    <button className="account-button" onClick={() => navigate("/")}>correspondence with city</button>
                    <button className="account-button" onClick={() => navigate("/")}>launch map</button>
                </div>
                <div className="three-button-div">
                    <button className="account-button" onClick={() => navigate("/")}>view permit library</button>
                    <button className="account-button" onClick={() => navigate("/")}>open autoCAD</button>
                    <button className="account-button" onClick={() => navigate("/")}>FAQ</button>
                </div>
            </div>
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default QuickActions