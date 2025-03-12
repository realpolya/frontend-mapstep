/* --------------------------------Imports--------------------------------*/

import "./allpages.css"

/* --------------------------------Component--------------------------------*/

const NavBar = () => {
  return (
    <nav id="navbar-tw">
        <h2 className="text-textColor2">mapStep</h2>
        <div className="nav-searchbar">
            <label>lot address</label>
            <input></input>
        </div>
        <img id="nav-menu-img" className="h-[50%]" src="/reshot_menu.svg"/>
    </nav>
  )
}

export default NavBar