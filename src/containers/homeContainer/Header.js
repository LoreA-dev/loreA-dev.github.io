import React from "react";
import { Link } from "react-router-dom";

function Header (){
    return (
        <header>
        <title>Home</title>
            <nav>
                <section className="navbarOptions">
                    {/* <img className="navbarImage" src="./../img/navbar.png" /> */}
                    {/* <Link className="navMain" to="/description">Description</Link> */}
                    <Link className="navMain" to="/login">Login</Link>
                </section>
            </nav>
        </header>
    )
}


export default Header;