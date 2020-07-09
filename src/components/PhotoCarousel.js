import React from 'react'
import {Row, Container, Image, Carousel} from 'react-bootstrap'
import cinqueTerre from '../assets/cinqueterre.jpeg'
import olympics from '../assets/olympics.jpg'
import uxbridge from '../assets/uxbridge.jpg'
import kayaking from '../assets/kayaking.jpeg'



const PhotoCarousel = () => {
    return(
        <Carousel className='carousel'>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={olympics}
            alt="Olympics"
          />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100 carousel-image"
            src={uxbridge}
            alt="Lindsay, her husband and her dog in the snow."
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={cinqueTerre}
            alt="cinque terre"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={kayaking}
            alt="kayaking in Dubrovnik"
          />
        </Carousel.Item>
      
    
      </Carousel>

    )
}

export default PhotoCarousel