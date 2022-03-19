import React from "react";
import Header from "./Header";
import Main from "./Main";
import './style/mobileLogin.css';
import './style/styleLogin.css';

function Login() {
    return ( 
        <div id="mainContainer">
            <img alt="" className="mobileImage" src="./../img/mobilelogin.png" />
            <img alt="" className="loginImage" src="./../img/Selva.png" />
            <Header />
            <Main />
            
        </div>
    );
  }

export default Login;