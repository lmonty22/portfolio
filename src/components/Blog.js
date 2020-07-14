import React from 'react'
import { Card} from 'react-bootstrap'



const Blog = (props) => {
    return(
        <a  target="_blank" rel="noopener noreferrer" href={props.blog.link}>
        <Card hoverable className='blog-card' >
             <Card.Img variant="top" className='card-image blog-image' src={props.blog.image} />
        <Card.Body>
             <Card.Title className='card-title'style={{fontWeight:'bold'}}>{props.blog.title}</Card.Title>
            <Card.Text>
                {props.blog.date}
            </Card.Text>
        </Card.Body>
        </Card>
        </a>

    )
}

export default Blog