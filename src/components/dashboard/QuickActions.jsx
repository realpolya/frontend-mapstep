/* --------------------------------Imports--------------------------------*/

import { Link } from "react-router-dom";

/* --------------------------------Component--------------------------------*/

const QuickActions = () => {

    return (
        <div className="pt-8">
            <h4>quick actions</h4>
            <div className="flex flex-col justify-between">
                <div className="three-button-div">
                    <button className="action-button" onClick={() => navigate("/")}>start new project</button>
                    <button className="action-button" onClick={() => navigate("/")}>correspondence with city</button>
                    <button className="action-button" onClick={() => navigate("/")}>launch map</button>
                </div>
                <div className="three-button-div">
                    <button className="action-button" onClick={() => navigate("/")}>view permit library</button>
                    <button className="action-button" onClick={() => navigate("/")}>open autoCAD</button>
                    <button className="action-button" onClick={() => navigate("/")}>FAQ</button>
                </div>
            </div>
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default QuickActions