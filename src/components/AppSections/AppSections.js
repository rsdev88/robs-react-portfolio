import React from "react"
import {useSelector} from "react-redux"
import AppSection from "./AppSection"
import "./appsections.css"

function AppSections(){

    const applicationsArray = useSelector(state => state)

    const applicationElements = applicationsArray.map(application => (
        <AppSection key={application.id} data={application} />
    ))

    const noApplicationsFoundElement =  <section className="applications-none-found"><p>No applications were found!</p></section>

    return(
        <section className="app-sections">
        {/* To do - style no applications found. */}
            {applicationsArray.length > 0 ? applicationElements : noApplicationsFoundElement}
        </section>
        
    )
}

export default AppSections