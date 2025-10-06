/* --------------------------------Imports--------------------------------*/

import './Review.css'

/* --------------------------------Component--------------------------------*/

const RedLineTool = () => {

    return (
        <div className="flex flex-row">
            <div className="tools-div">
                <button className="tool-button">🪄</button>
                <button className="tool-button">🔍</button>
                <button className="tool-button">✏️</button>
                <button className="tool-button">❌</button>
                <button className="tool-button">📁</button>
                <button className="tool-button">➡️</button>
                <button className="tool-button">⬅️</button>
            </div>
            <div>
                Redline space
            </div>
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default RedLineTool