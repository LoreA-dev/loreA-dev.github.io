import React from "react";

function Main(){
    return(
        <main>
            <section id="parent_container">
                <section className="main_container">
                    <section className="text_container">
                        <h1 id="main-h1">Welcome to the Home page</h1>
                        <p id="main-p">- LoreA-dev</p>
                        <hr className="separate">
                        </hr>
                    </section>
                    <section id="second_container">
                        <p id="second-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit cum autem dolorum
                            doloribus? Voluptatum minima vel ut, quos corrupti, distinctio facere, suscipit tenetur quis
                            sunt
                            optio sit voluptate blanditiis dignissimos?</p>
                    </section>
                    <section className="buttonsInside">
                        <button id="button1"><strong>Got it!</strong></button>
                        <button id="button2">Not got it!</button>
                    </section>
                </section>
                <img className="homepageImage" src="./../img/homepage.png" />
            </section>
        </main>
    )
}

export default Main;