import React from "react"
import "./footer.css"

function Footer(){
    return(
        <footer>
            <div className="footer-content">
                <p><a className="footer-link" 
                        href="https://github.com/rsdev88">
                    <i className="devicon-github-plain github-button-icon"></i><span className="footer-link-text">rsdev88</span>
                    </a>
                </p>
                <p>© Copyright 2020</p>
            </div>
        </footer>
    )
}

export default Footer