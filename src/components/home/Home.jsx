import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import Scroll from "./Scroll";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <div className="home__img"></div>
                    <Data />
                </div>
                <Scroll />
            </div> 
        </section>
    )
}

export default Home;