import React from 'react'
import {Row, Container, Col, Image, Button} from 'react-bootstrap'
import headshot4 from '../assets/headshot4.png'
import Footer from './Footer'
import github from '../assets/github.png'
import medium from '../assets/Medium-512.webp'
import linkedin from '../assets/linkedin.png'
import resume from '../assets/Lindsay Montgomery - Resume.pdf'
import { Fade } from "react-awesome-reveal";

const getHeight = (window) => {
    return window.innerHeight
}

const About = (props) => {
    return(
        <Fade>
        <Container id='about' className='about-container wrapper' style={{minHeight: props.height(window)}} >
                <h1 >About</h1>
                <Row className= 'about-row'>
                    <Col className='left-col'  >
                         <Image className='headshot'src={headshot4} roundedCircle />
                        <div className='bio'> My name is Lindsay Montgomery. 
                            I'm a Full Stack Developer, retired Canadian Olympian, problem-solving enthusiast, and dog mom.
                            I recently graduated from Flatiron's Software Engineering Program. 
                            I'm seeking my first web developer role in Washington, DC (or remote). I have a diverse professional background 
                            with experience in Tableau, event management, Fin-Tech, sales and the sports industry.
                        </div>
                <Row>
                    <a href={resume} download><Button className='btn-primary'>Download Resume</Button></a>
                </Row>
                <Row className='icon-row'>
                    <a target="_blank" href='https://www.linkedin.com/in/lindsaymontgomery1/'><img src={linkedin} className='icon'></img></a>
                    <a target='_blank' href='https://github.com/lmonty22' ><img src={github} className='icon'></img> </a>
                    <a target='_blank' href='https://medium.com/@lmonty22'><img src={medium} className='icon'></img> </a>
                </Row>
                    </Col>
                </Row>   
             
                
        </Container>
        </Fade>
    )
}

export default About