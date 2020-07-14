import React from 'react'
import github from '../assets/github.png'
import medium from '../assets/Medium-512.webp'
import linkedin from '../assets/linkedin.png'

const Footer = () => (
    <div className='footer'>
    <a target="_blank" href='https://www.linkedin.com/in/lindsaymontgomery1/'><img src={linkedin} className='icon'></img></a>
    <a target='_blank' href='https://github.com/lmonty22' ><img src={github} className='icon'></img> </a>
    <a target='_blank' href='https://medium.com/@lmonty22'><img src={medium} className='icon'></img> </a>
    <a target='_blank' href='https://medium.com/@lmonty22'>Report an issue</a>
    </div>
)

export default Footer