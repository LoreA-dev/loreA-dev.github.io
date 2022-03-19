import React from "react";
import { Link } from "react-router-dom";
 
function Main (){
    return (
        <main>
            <div className="loginForm">
                <form>
                    <h1>Log in</h1>
                    <section className="email-container">
                        <section className="text-container">
                            <i className="fas fa-user userIcon"></i>
                            <label className="emailText" for="email">Email </label>
                        </section>
                        <input type="email" className="email" autocomplete="email" required /><br />
                    </section>
                    <section className="password-container">
                        <section className="text-container">
                            <i className="fas fa-unlock-alt passwordIcon"></i>
                            <label for="password">Contraseña</label>
                        </section>
                        {/* <img style="width: 20px; padding-left:2px" src="../white_lock_icon.png"/> */}
                        <input type="password" className="password" required />
                    </section>
                    <section className="recoveryPassword">
                        <Link to="#">Forgot password?</Link>
                    </section>
                    <section className="send">
                        <input type="submit" className="send" value="Log in" />
                    </section>
                    <section className="createAcount">
                        <Link to="/register">Don't have an account yet?</Link>
                    </section>
                </form>
            </div>
        </main>
    )
 }

 export default Main;