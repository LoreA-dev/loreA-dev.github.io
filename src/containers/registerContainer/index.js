import React from "react";
import Main from "./Main";
import Header from "./Header";
import './style/mobileRegister.css';
import './style/styleRegister.css';

function Register () {
    return (
        <div id="mainContainer">
            <img className="mobileImage" src="./../img/mobilelogin.png" />
            <img className="registerImage" src="./../img/Selva.png"/>
            <Header />
            <Main />
        </div>
    )
}

export default Register