import React from 'react'
import {Image}  from 'react-bootstrap'


const ImageBar = (props) => (
    <div className='image-bar'>
        <Image fluid src={props.image} />
    </div>
)

export default ImageBar