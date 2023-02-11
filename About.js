// Main.js
import React from 'react';
import './About.css'
import Brothers1 from './Mario and Adrian A.jpg'
import Brothers2 from './Mario and Adrian b.jpg'

const About = () => {
  return (
    <div className="app__about" id="about">
     <div className='app__about-info'>
     <h1>Little Lemon
     <h2>Chicago</h2>
     </h1>
     <p>Amet minim mollit non deserunt<br/>ullamco est sit aliqua dolor do amet<br/>sint. Velit officia consequat duis enim<br/>velit mollit. Exercitation veniam<br/>consequat sunt nostrud amet.<br/>
Amet minim mollit non deserunt<br/>ullamco est sit aliqua dolor do amet<br/>sint. Velit officia consequat duis enim<br/>velit mollit. </p>
      </div>
      <div className='app__about-img'>
<img src={Brothers1} alt="Mario and Adrian 1"/>
<img src={Brothers2} alt="Mario and Adrian 2"/>

      </div>
    </div>
  );
}

export default About;
