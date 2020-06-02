import React from "react"
import "./hero.css"

function Hero(){
    return (
        <header className="hero">

            <img className="hero-content hero-image"
                src="./images/header-logo.svg"
                alt="Header logo" />
            <h1 className="hero-content hero-title">Rob's React Portfolio</h1>
            
        </header>
    )
}

export default Hero 