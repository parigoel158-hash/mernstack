import React from 'react'
import { Link, Outlet} from 'react-router-dom' 
import profile from "../assets/image/pari.jpeg";
const About = () => {
  return (
    <section className="about-page">
      <div className="about-image">
        <img src ={profile} alt="Pari"/>
      </div>
    <div className="container">
      <h2>About Me</h2>
      <p>
         I'm a passionate developer who enjoys building beautiful and
            functional websites. I specialize in HTML, CSS, JavaScript,
            and responsive design.I am a passionate MERN Stack Developer with
            expertise in MongoDB, Express.js, React.js, and Node.js. I enjoy
            building modern, responsive, and scalable web applications that
            deliver seamless user experiences. From designing interactive
            front-end interfaces to developing secure and efficient back-end
            systems, I love turning ideas into functional digital solutions.
            I am continuously learning new technologies, improving my problem-solving 
            skills, and following industry best practices to create high-quality
            applications that are both user-friendly and performance-driven.
      </p>  
    </div>
    </section>
  );
};

export default About;