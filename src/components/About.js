import React from 'react'
import {Row, Container, Image, Badge} from 'react-bootstrap'
import {Button} from 'semantic-ui-react'
import headshot4 from '../assets/headshot4.png'
import github from '../assets/github.png'
import medium from '../assets/Medium-512.webp'
import linkedin from '../assets/linkedin.png'
import resume from '../assets/Lindsay Montgomery - Resume.pdf'
import { Fade } from "react-awesome-reveal";


const skills = ['Ruby', 'Ruby on Rails', 'Javascript', 'ReactJS', 'Redux', 'SQL', 'PostgreSQL', 'Git', 'Tableau','Object-Oriented Programming', 'Object-Relational-Mapping']
const About = (props) => {
    return(
        <Fade>
        <Container id='about' className='about-container' style={{minHeight: props.height(window)}} >
                 <Row className='about-item'>
                      <h1 >About</h1>
                         <Image className='headshot'src={headshot4} roundedCircle />
                        <div className='bio'> My name is Lindsay Montgomery. 
                            I'm a Full Stack Developer, retired Canadian Olympian, problem-solving enthusiast, and dog mom.
                            I recently graduated from Flatiron's Software Engineering Program. 
                            I'm seeking my first web developer role in Washington, DC (or remote). I have a diverse professional background 
                            with experience in Tableau, event management, Fin-Tech, sales and the sports industry.
                        </div>
                </Row>
                 <Row className='about-item'>
                        <h2>Technical Skills</h2>
                        <div >
                            {skills.map(s => <Badge className='skills badge-light'> {s} </Badge>)}
                        </div>
                </Row>     
                <Row className='about-item'>
                    <a href={resume} download><Button className='btn-primary'>Download Resume</Button></a>
                </Row>    
                <Row className='about-icons'>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/lindsaymontgomery1/'><img alt='linkedin' src={linkedin} className='icon'></img></a>
                    <a target='_blank' rel="noopener noreferrer" href='https://github.com/lmonty22' ><img src={github} alt='github' className='icon'></img> </a>
                    <a target='_blank' rel="noopener noreferrer" href='https://medium.com/@lmonty22'><img src={medium} alt='medium'className='icon'></img> </a>
                </Row>
        </Container>
        </Fade>
    )
}

export default About