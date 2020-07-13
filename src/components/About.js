import React from 'react'
import {Row, Container, Col, Image} from 'react-bootstrap'
import headshot4 from '../assets/headshot4.png'
import github from '../assets/github.png'
import medium from '../assets/Medium-512.webp'
import linkedin from '../assets/linkedin.png'
import resume from '../assets/Lindsay Montgomery - Resume.pdf'
import { Fade } from "react-awesome-reveal";
const About = () => {
    return(
        <Fade>
        <Container className='about' >
                <h1 >About</h1>
                <Row className= 'about-row'>
                    <Col className='left-col'  >
                         <Image className='headshot'src={headshot4} roundedCircle />
                    {/* </Col> */}
                    {/* <Col className='right-col' > */}
                        <div className='bio'> My name is Lindsay Montgomery. 
                            I'm a Full Stack Developer, Problem Solving Enthusiast, Retired Canadian Olympian and Dog Mom.
                            I recently graduated from the Flatiron School's Immersive Software Engineering Program. 
                            I'm actively seeking my first web developer role in Washington, DC or remotely. I have a diverse professional background 
                            in Tableau, Event Management, Fin-Tech, Sales and the Sports Industry.
                        </div>
                    </Col>
                </Row>   
    
                        {/* <h1>Technical Skills</h1>
                        <ul>
                        <li>Ruby on Rails</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>SQL</li>
                        <li>Postgres</li>
                        <li>Tableau</li>
                    </ul> */}
                <Row>
                            <a target="_blank" href='https://www.linkedin.com/in/lindsaymontgomery1/'><img src={linkedin} className='icon'></img></a>
                            <a target='_blank' href='https://github.com/lmonty22' ><img src={github} className='icon'></img> </a>
                            <a target='_blank' href='https://medium.com/@lmonty22'><img src={medium} className='icon'></img> </a>

                </Row>
                <Row>
                    <a href={resume} download>Download Resume</a>
                </Row>
        </Container>
        </Fade>
    )
}

export default About