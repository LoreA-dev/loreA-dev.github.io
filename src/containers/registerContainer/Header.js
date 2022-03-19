import React from "react";
import { Link } from "react-router-dom";

function Header (){
    return (
        <header>
            <title>Register</title> 
            <nav>
                <Link className="navRegister" to="/"><i className="fas fa-home homeIcon"></i></Link>
            </nav>
        </header>
    )
}

export default Header;