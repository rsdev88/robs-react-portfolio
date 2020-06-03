import React from "react"
import {useSelector} from "react-redux"
import AppSection from "./AppSection"
import "./appsections.css"

function AppSections(){

    const applicationsArray = useSelector(state => state)

    const applicationElements = applicationsArray.map(application => (
        <AppSection key={application.id} data={application} />
    ))

    const noApplicationsFoundElement =  <div className="app-section-none-found"><h2>No applications were found!</h2></div>

    return(
        <section className="app-sections">
            {applicationsArray.length > 0 ? applicationElements : noApplicationsFoundElement}
        </section>   
    )
}

export default AppSections