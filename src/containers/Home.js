import React from 'react'
import { Container} from 'react-bootstrap'
import { Fade } from "react-awesome-reveal";
import PhotoCarousel from '../components/PhotoCarousel'


const Home = () => {
    return(
        <Container fluid className={`splash `} id='home'>
             <Fade>
            <PhotoCarousel/>
            {/* <h1 className='name-header'>Lindsay Montgomery</h1> */}
            </Fade>
        </Container>
    )
}

export default Home