/* --------------------------------Imports--------------------------------*/

import './Review.css'

/* --------------------------------Component--------------------------------*/

const RedLineTool = () => {

    return (
        <div className="flex flex-row w-full pl-4 sm:pl-0 pt-4 sm:pt-0">
            <div className="tools-div">
                <button className="tool-button">🪄</button>
                <button className="tool-button">🔍</button>
                <button className="tool-button">✏️</button>
                <button className="tool-button">❌</button>
                <button className="tool-button">📁</button>
                <button className="tool-button">➡️</button>
                <button className="tool-button">⬅️</button>
            </div>
            <div className="redline-div">
                <p className="italic p-4">current dwg:</p>
            </div>
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default RedLineTool