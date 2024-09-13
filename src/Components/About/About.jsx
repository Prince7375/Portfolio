import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/profile_img.png"

const About = () => {
    return (
        <div className='about'>
            <div id='about' className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="Profile" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a frontend develpoer</p>
                        <p>As a dedicated  frontend developer, I have a solid grasp of HTML, CSS, JavaScript, and experience with React to build responsive web applications. I'm eager to apply my skills and passion for design to create engaging user experiences.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'70%'}} /></div>
                        <div className="about-skill"><p>React.js</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                        <div className="about-skill"><p>Next.js</p><hr style={{width:"40%"}} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About