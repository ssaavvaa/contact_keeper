import React from 'react';
import '../../styles/About.css';

const About = () => {
    return (
        <div>
           <h1>About this App</h1> 
           <p className='my-1'>
            This is a full stack React App for keeping contacts
           </p>
           <p className='about-paragraph'>
               <strong>Version:</strong>1.0.0
           </p>
        </div>
    )
}

export default About;
