import React from "react"
import ReactHtmlParser from "react-html-parser"
import "./appsections.css"

function AppSection(props){

    const {title, image, bodyHtml, appLink, gitHubLink} = props.data

    const isFlipped = image.order === "2"

    return (
        <div className="app-section">

            <div className={`app-section-image-container ${ isFlipped? "app-section-image-container_flipped" : ""}`}> 
                <img className="app-section-image"
                    src={image.url}
                    alt={image.altText}
                />
            </div>

            <div className="app-section-text-content">
                <h3>{title}</h3>
                
                <div className="app-section-text-content-body">
                    {ReactHtmlParser(bodyHtml)}
                </div>

                <div className="app-section-buttons">
                    {
                        appLink !== undefined && appLink !== null &&
                        <a className="app-section-button applink-button" 
                            href={appLink.href}>
                                <span className="app-section-button-text">{appLink.text}</span>
                        </a>
                    }
                    <a className="app-section-button github-button" 
                        href={gitHubLink.href}>
                            <i className="devicon-github-plain github-button-icon"></i><span className="app-section-button-text">{gitHubLink.text}</span>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default AppSection