import React from 'react';

import { projects } from '../../data/projects.js';

const CaseStudies = () => {

    const caseStudies = projects.filter((project)=>{
        return project
    })

    return(
        <section>
            <h3>Other Case Studies</h3>
            <div>
                {caseStudies.map((project) => {
                    if(!project.featured) {
                        return (
                            <div>
                                <img src="#" atl="This is case study 1" />
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

export default CaseStudies;