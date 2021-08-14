import React from 'react'
import { Link } from "react-router-dom";


function Nav2() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
<div className="container">
  <Link className="navbar-brand" to={"/sign-in"}>Break Time</Link>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to={"#"}>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"#"}>Logout</Link>
      </li>
    </ul>
  </div>
</div>
</nav>
        </div>
    )
}

export default Nav2
