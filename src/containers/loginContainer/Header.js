import React from "react";
import { Link } from "react-router-dom";

function Header (){
    return (
        <header>
        <title>Login</title> 
            <nav>
                <Link className="navLogin" to="/"><i className="fas fa-home homeIcon"></i></Link>
                {/* <img className="navbarImage" src="./../img/navbar.png"/> */}
            </nav>
        </header>
    )
}

export default Header;