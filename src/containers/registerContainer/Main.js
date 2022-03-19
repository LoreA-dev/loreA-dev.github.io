import React from "react";
import {Link} from "react-router-dom";

function Main (){
    return(
        <main>
            <div className="registerForm">
                <form>
                    <h1>Register</h1>
                    <section className="register-container">
                        <section className="text1-container">
                            <section className="text-name">
                                <i className="fas fa-user userIcon"></i>
                                <label for="name">Name</label>
                                <input type="text" className="name" autocomplete="name" required />
                            </section>
                        </section>
                        <section className="text2-container">
                            <section className="text-email">
                                <i className="far fa-envelope emailIcon"></i>
                                <label for="email">Email</label>
                                <input type="email" className="email" required />
                            </section>
                            <section className="text-password">
                                <i className="fas fa-key passwordIcon"></i>
                                <label for="password">Password</label>
                                <input type="password" className="password" required />
                            </section>
                            <section className="text-confirmpassword">
                                <i className="fas fa-key passwordIcon"></i>
                                <label for="confirmpassword">Confirm password</label>
                                <input type="password" className="confirmpassword" required />
                            </section>
                        </section>
                    </section>
                    <section className="send">
                        <input type="submit" className="send" value="Register" />
                    </section>
                    <section className="login">
                        <Link to="/login" >Have an account?</Link>
                    </section>
                </form>
            </div>
        </main>
    )
}

export default Main;