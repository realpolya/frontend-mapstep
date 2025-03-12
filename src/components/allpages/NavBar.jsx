/* --------------------------------Imports--------------------------------*/

import "./allpages.css"

/* --------------------------------Component--------------------------------*/

const NavBar = () => {
    return (
        <nav id="navbar-tw">
        <h2 className="text-blueColor pl-4 text-2xl">mapStep</h2>
        <div className="nav-searchbar">
            <label className="pr-2">lot address</label>
            <input className="rounded-xl border-2 border-solid"></input>
        </div>
        <img id="nav-menu-img" className="h-[50%] pr-4" src="/reshot_menu.svg"/>
    </nav>
  )
}

/* --------------------------------Export--------------------------------*/

export default NavBar