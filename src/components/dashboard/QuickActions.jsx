/* --------------------------------Imports--------------------------------*/

import { Link } from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";


/* --------------------------------Component--------------------------------*/

const QuickActions = () => {

    const navigate = useNavigate()

    return (
        <div className="pt-8">
            <h4 className="dash-h4">quick actions</h4>
            <div className="flex flex-col justify-between">
                <div className="three-button-div">
                    <button className="action-button hover-btn" onClick={() => navigate("/new")}>start new project</button>
                    <button className="action-button hover-btn" onClick={() => navigate("/")}>correspondence with city</button>
                    <button className="action-button hover-btn" onClick={() => navigate("/")}>launch map</button>
                </div>
                <div className="three-button-div">
                    <button className="action-button hover-btn" onClick={() => navigate("/")}>view permit library</button>
                    <button className="action-button hover-btn" onClick={() => navigate("/")}>open autoCAD</button>
                    <button className="action-button hover-btn" onClick={() => navigate("/faq")}>FAQ</button>
                </div>
            </div>
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default QuickActions