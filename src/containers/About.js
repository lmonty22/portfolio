import React from 'react'
import {Row, Container, Col, Image} from 'react-bootstrap'
import headshot4 from '../assets/headshot4.png'
const About = () => {
    return(
        <Container className='about' >
                <h1 >About</h1>
                <Row className= 'about-row'>
                    <Col className='left-col' >
                         <Image className='headshot'src={headshot4} roundedCircle />
                    </Col>
                    <Col className='right-col'>
                        <div> My name is Lindsay Montgomery. 
                            I'm a Full Stack Developer, Problem Solving Enthusiast, Retired Canadian Olympian and Dog Mom.
                            I recently graduated from the Flatiron School's Immersive Software Engineering Program. 
                            I'm actively seeking my first web developer role in Washington, DC or remotely. 
                        </div>
                    </Col>
                </Row>   
        </Container>
    )
}

export default About