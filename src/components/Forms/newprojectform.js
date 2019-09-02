import React, {useState} from 'react';

const NewProjectForm = () => {
    const[newProject, setNewProject] = useState({
        name: "",
        email: "",
        website: "",
        budget: "",
        timeline: "",
        goal: "",
        vision: "",
    })

    const handleChange= (event) => {
        console.log({[event.target.name]:event.target.value})
        setNewProject({
            ...newProject,
            [event.target.name]:event.target.value
        })
    }


    return (
        <div>
        <h3>New Project</h3>
        <p>Do you have a project that you would like to collaborate on?</p>
        <p>Fill out the form below and tell me all about your idea.
            I will reach out to you shortly to schedule a time for us to talk
            more about your vision.  If we are good fit then I'll send you a
            quote and we can talk about your timeline.</p>
        
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
                type='text'
                name='name'
                value={newProject.name}
                onChange= {handleChange}
            />
            <label>Email Address</label>
            <input 
                type='email'
                name='email'
                value={newProject.email}
                onChange= {handleChange}
            />
            <label>Website URL</label>
            <input 
                type='text'
                name='website'
                value={newProject.website}
                onChange= {handleChange}
            />
            <label>Budget</label>
            <input 
                type='text'
                name='budget'
                value={newProject.budget}
                onChange= {handleChange}
            />
            <label>Timeline</label>
            <input 
                type='text'
                name='timeline'
                value={newProject.timeline}
                onChange= {handleChange}
            />
            <label>Purspose or Goal to Meet</label>
            <input 
                type='text'
                name='goal'
                value={newProject.goal}
                onChange= {handleChange}
            />
            <label>Describe Your Vision</label>
            <input 
                type='text'
                name='vision'
                value={newProject.vision}
                onChange= {handleChange}
            />
            <button>Submit</button>
        </form>
        </div>
    )
};

export default NewProjectForm;