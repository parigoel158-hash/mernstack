import React from 'react'
import { Link, Outlet} from 'react-router-dom' 
const Project = () => {
   return (
    <> 
    <section id="project" className="project">
        <h2>My Projects</h2>

        <div className="project-grid">
            <div className="card">
                <h3>Crud</h3>
           <a href="https://app.netlify.com/projects/melodic-sundae-a37d15/"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-dark">View</a>
            </div>

            <div className="card">
                <h3>Weather API</h3>
                 <a href="https://app.netlify.com/projects/kaleidoscopic-bombolone-f1e3ca/"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-dark">View</a>
            </div>

            <div className="card">
                <h3>Stopwatch</h3>
                <a href="https://app.netlify.com/projects/meek-starship-9e5889/"
                 target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark">View</a>
            </div>
        </div>
    </section>
         </> 
   )
}
export default Project
