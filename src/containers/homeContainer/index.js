import React from "react";
import Svgs from "./Svgs";
import Header from "./Header";
import Main from "./Main";
import Cards from "./Cards";
import './style/desktopHome.css';
import './style/mobileHome.css';
import './style/tabletHome.css';

function HomePage() {
    return (
      <div id="homeContainer">
        <Svgs />
        <Header/>
        <Main />
        <Cards />
      </div>
    );
  }

export default HomePage;