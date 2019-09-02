import React from 'react';

import { projects } from '../../data/projects.js';

const FeaturedProjects = () => {

    const featured = projects.filter((project)=>{
        return project
    })

    return(
        <section>
            <h3>Featured Projects</h3>
            <div>
                {featured.map((project) => {
                    if(project.featured) {
                        return (
                            <div>
                                <img src="#" atl="This is featured project 1" />
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <button>View Details</button>
                            </div>
                        )
                    }
                })}
            </div>
        </section>
    )
}

export default FeaturedProjects;