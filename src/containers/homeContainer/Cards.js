import React from "react";

const card = [
    {icon:"blabla" ,
     title:"Instagram" ,
     description: "blabla"
    },
    {icon:"blabla" ,
     title:"Github" ,
     description: "blabla"
    },
    {icon:"blabla" ,
     title:"Twiter" ,
     description: "blabla"
    }
]

function Cards (){
    return (
        <div id="cardsContainer">
            <section className="sn_container">
                <p className="snText">Social Networks</p>
            </section>
            <section className="cards_container">
                <div className="card" id="card1">
                    <div className="inside" id="boxInside1">
                        <img alt="Instagram" className="instagramImage" src="./../img/Instagram.png" />
                    </div>
                    <div className="textInside">
                        <p className="titleText" id="instagramText">Instagram</p>
                        <p id="mainText">On my Instagram you can find my normal life. If you want to see, Follow me 😄</p>
                        <a href="https://www.instagram.com/lore_at21/"><button className="cardButton" id="instagramButton">Go
                        ahead</button></a>
                    </div>
                </div>
                <div className="card" id="card2">
                    <div className="inside" id="boxInside2">
                        <img alt="" className="githubImage" src="./../img/Github.png" />
                    </div>
                    <div className="textInside">
                        <p className="titleText" id="githubText">Github</p>
                        <p id="mainText">I use Github to show my progress in programing. Please, support me ✨</p>
                        <a href="https://github.com/LoreA-dev"><button className="cardButton" id="githubButton">Go
                                ahead</button></a>
                    </div>
                </div>
                <div className="card" id="card3">
                    <div className="inside" id="boxInside3">
                        <img alt="" className="twitterImage" src="./../img/Twitter.png" />
                    </div>
                    <div className="textInside">
                        <p className="titleText" id="twitterText">Twitter</p>
                        <p id="mainText">I don't know how to use Twitter, but i'm learning. Follow me if you want 😎</p>
                        <a href="https://twitter.com/RLore_A"><button className="cardButton" id="twitterButton">Go
                                ahead</button></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cards;