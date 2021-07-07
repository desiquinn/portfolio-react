import React from 'react';

import { techStack } from '../../data/techStack.js';

const Technology= () => {

    return (
        <section>
            <h3>Tech Stack</h3>
            {techStack.map((tech)=>{

                return <img src={tech.tech_image} atl={tech.tech_name} />

            })}
        </section>
    )
}

export default Technology;