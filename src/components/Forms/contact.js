import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const[message, setMessage] = useState({
        name: "",
        email: "",
        website: "",
        description: "",
    })

    const handleChange= (event) => {
        console.log({[event.target.name]:event.target.value})
        setMessage({
            ...message,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit= (event) => {
        event.preventDefault();
        console.log(event)
    }


    return (
        <div>
            <div>
                <h3>Employers</h3>
                <p>I am currently looking for full time employment as a Full Stack Web Developer.
                    If you'd like to interview me, please contact me in the following ways:
                    Phone Number: (704)819-2526
                    Email: desiquinncompany@gmail.com
                </p>
            </div>

            <div>
                <h3> Connect With Me on Social Media </h3>
                <img src="#" atl="GitHub"/>
                <img src="#" atl="LinkedIN"/>
                <img src="#" atl="Instagram"/>
                <img src="#" atl="Facebook"/>
            </div>

            <h3>General Inquiries</h3>

            <div>
                <h4>Where to Email?</h4>
                <p>Hire Me Full Time:</p>
                <p>New Project Inquiries:</p>
                <p>General Questions:</p>
                <p>Press and Promotions:</p>

                <h4>Other Ways to Contact Me</h4>
                <img src="#" atl="phone number" />
                <p>Phone Number: 704-819-2526</p>
                <img src="#" atl="address" />
                <p>Send Mail to: 
                    Desiree Morris
                    4652 Perth Ct
                    Apt. 6 
                    Charlotte NC 28215</p>
            </div>
            <div>
                <h4>Send Me a Message</h4>
                <p>Use this form for general inquiries only.  If you want to start a new project with me please fill out
                    the <Link to="/newproject">New Project Form </Link> to tell me more about your vision.  
                </p>
        
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input 
                        type='text'
                        name='name'
                        value={message.name}
                        onChange= {handleChange}
                    />
                    <label>Email Address</label>
                    <input 
                        type='email'
                        name='email'
                        value={message.email}
                        onChange= {handleChange}
                    />
                    <label>Website URL</label>
                    <input 
                        type='text'
                        name='website'
                        value={message.website}
                        onChange= {handleChange}
                    />
                    <label>How Can I Help You?</label>
                    <input 
                        type='text'
                        name='description'
                        value={message.description}
                        onChange= {handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
};

export default Contact;