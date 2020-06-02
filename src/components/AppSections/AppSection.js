import React from "react"
import "./appsections.css"

function AppSection(props){

    const {title, image, paragraphs, appLink, gitHubLink} = props.data

    const isFlipped = image.order === "2"

    return (
        <div className="app-section">

            <img className={`app-section-image ${ isFlipped? "app-section-image_flipped" : ""}`}
                src={image.url}
                alt={image.altText}
            />

            <div className="app-section-text-content">
                <h3>{title}</h3>
                
                { paragraphs !== undefined && paragraphs.length > 0 && 
                <div className="app-section-text-content-body">
                    {paragraphs.map(paragraph => <p>{paragraph}</p>)}
                </div>
                }

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