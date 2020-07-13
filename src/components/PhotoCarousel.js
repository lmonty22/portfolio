import React from 'react'
import { Carousel} from 'react-bootstrap'
import cinqueTerre from '../assets/cinqueterre.jpeg'
import olympics from '../assets/olympics.jpg'
import kayaking from '../assets/kayaking.jpeg'
import pool from '../assets/pool.jpg'



const PhotoCarousel = () => {
    return(
        <Carousel className='carousel'>
           <Carousel.Item>
          <img
            className="carousel-image"
            src={pool}
            alt="pool"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={olympics}
            alt="Olympics"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={cinqueTerre}
            alt="cinque terre"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={kayaking}
            alt="kayaking in Dubrovnik"
          />
        </Carousel.Item>
      
    
      </Carousel>

    )
}

export default PhotoCarousel