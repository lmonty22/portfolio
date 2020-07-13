import React from 'react'
import {Row, Container, Image} from 'react-bootstrap'
import { Slide, Fade } from "react-awesome-reveal";
import pool from '../assets/pool.jpg'
import PhotoCarousel from '../components/PhotoCarousel'


const Home = () => {
    return(
        <Fade>
        <Container fluid className={`splash `}>
            <PhotoCarousel/>
            <h1 className='name-header'>Lindsay Montgomery</h1>
      </Container>
      </Fade>

    )
}

export default Home