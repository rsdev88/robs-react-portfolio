import React from "react"
import "./intro.css"

function Intro(){
    return (
        <section className="intro">
            <h2>Thanks for taking the time to visit my portfolio.</h2>
            <p>During the lockdown I found I had a lot of time on my hands so I decided to improve my front-end development skills and learn a new technology. I decided on React for a number of reasons:</p>
            <ul>
                <li>It's highly popular amongst front-end developers with a huge community using it and sharing advice and tips online.</li>
                <li>It's used by many world-class, high-profile companies and is highly in-demand by employers.</li>
                <li>It's actively maintained and supported by Facebook so it's not going away soon!</li>
            </ul> 
            <p>I started by completing several React courses on <a href="https://scrimba.com">Scrimba</a> to learn the fundamentals, and then advanced to their full <a href="https://scrimba.com/course/greact/enrolled">Bootcamp</a>. This all took around six weeks but my skills have grown tremendously during that time. Scrimba alligned perfectly with my hands-on approach to learning and so after completing the courses and Bootcamp, I've put what I learnt into practise by building several small sites and web apps.</p>
            <p>Below you'll find a list of apps that I've created to showcase what I've learnt. I've included a link to the Git repository for each one (they're all hosted using <a href="https://vercel.com/">Vercel</a> which has a limitation of one project or site per repository), so please feel free to take a look through the underlying code too. </p>
        </section>
        )
}

export default Intro