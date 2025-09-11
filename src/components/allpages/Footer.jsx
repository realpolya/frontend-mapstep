/* --------------------------------Imports--------------------------------*/

import { Link } from "react-router-dom";

/* --------------------------------Component--------------------------------*/

const Footer = () => {

    return (
        <footer>
            {/* <p className="pl-4">mapStep © 2025 all rights reserved</p> */}
            <p className="pl-4">mapStep 2025</p>
            <div id="footer-links" className="pr-4">
                <Link className="pr-2" to="/faq">FAQ</Link>
                <Link className="pr-2" to="/about">About</Link>
                <a href="https://github.com/realpolya">Creator</a>
            </div>
        </footer>
    )

}

/* --------------------------------Export--------------------------------*/

export default Footer