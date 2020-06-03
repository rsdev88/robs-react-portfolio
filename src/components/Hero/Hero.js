import React from "react"
import "./hero.css"

function Hero(){
    return (
        <header className="hero">
            <div className="hero-content-container">
                <div className="hero-image-container">
                    <img className="hero-content hero-image"
                        src="./images/header-logo.svg"
                        alt="Header logo" />
                </div>
                <div className="hero-title-container">
                    <h1 className="hero-content hero-title">Rob's React Portfolio</h1>
                </div>
            </div>
        </header>
    )
}

export default Hero 