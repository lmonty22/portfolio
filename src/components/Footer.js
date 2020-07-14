import React from 'react'
import github from '../assets/github.png'
import medium from '../assets/Medium-512.webp'
import linkedin from '../assets/linkedin.png'

const Footer = () => (
    <div className='footer'>
        <div className='icon-div'>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/lindsaymontgomery1/'><img  alt='linkedin' src={linkedin} className='icon'></img></a>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/lmonty22' ><img src={github} alt='github' className='icon'></img> </a>
            <a target='_blank' rel="noopener noreferrer" href='https://medium.com/@lmonty22'><img src={medium} alt='medium' className='icon'></img> </a>
        </div>
        <div className='icon-div'>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/lmonty22/portfolio/pulls'>Report an issue</a>
        </div>
    </div>
)

export default Footer