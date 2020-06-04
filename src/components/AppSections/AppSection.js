import React from "react"
import ReactHtmlParser from "react-html-parser"
import PropTypes from "prop-types"
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

AppSection.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string.isRequired,
        image: PropTypes.shape({
            url: PropTypes.string.isRequired,
            altText: PropTypes.string.isRequired,
            order: PropTypes.string.isRequired
        }).isRequired,
        bodyHtml: PropTypes.string.isRequired,
        appLink: PropTypes.shape({
            href: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }),
        gitHubLink: PropTypes.shape({
            href: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}

export default AppSection