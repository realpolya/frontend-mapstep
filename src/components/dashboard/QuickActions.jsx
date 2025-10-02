/* --------------------------------Imports--------------------------------*/

import { Link } from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";


/* --------------------------------Component--------------------------------*/

const QuickActions = () => {

    const navigate = useNavigate()

    return (
        <div className="pt-8 w-full">
            <h4 className="dash-h4">quick actions</h4>
            <div className="flex flex-col justify-between w-full">
                <div className="three-button-div">
                    <button className="action-button hover-btn" onClick={() => navigate("/new")}>start new project</button>
                    <button className="action-button hover-btn" onClick={() => navigate("/missing")}>correspondence with city</button>
                    <button className="action-button hover-btn" onClick={() => navigate("/missing")}>launch map</button>
                    <button className="action-button hover-btn" onClick={() => navigate("/missing")}>view permit library</button>
                    <button className="action-button hover-btn" onClick={() => navigate("/missing")}>open autoCAD</button>
                    <button className="action-button hover-btn" onClick={() => navigate("/faq")}>FAQ</button>
                </div>
            </div>
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default QuickActions