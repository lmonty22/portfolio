import React from 'react'
import { Image}  from 'react-bootstrap'
import { Fade } from "react-awesome-reveal";
// import PhotoCarousel from '../components/PhotoCarousel'
import pool from '../assets/pool.jpg'


const Home = (props) => {
    return(
             <Fade>
                 <div className={`splash `} style={{minHeight: props.height(window)}} id='home'>   
                    <Image fluid  style={{minHeight: props.height(window)}} className='pool-image' src={pool}/>
                    <h1 className='name-header'>Lindsay Montgomery</h1>               
               </div>
            </Fade>
    )
}

export default Home