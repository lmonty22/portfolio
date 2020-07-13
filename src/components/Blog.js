import React from 'react'
import {Row, Card, Image, Col, Badge} from 'react-bootstrap'



const Blog = (props) => {
    return(
        <a  target="_blank" href={props.blog.link}>
        <Card hoverable className='blog-card' >
             <Card.Img variant="top" className='card-image blog-image' src={props.blog.image} />
        <Card.Body>
             <Card.Title style={{fontWeight:'bold'}}>{props.blog.title}</Card.Title>
            <Card.Text>
                {props.blog.date}
            </Card.Text>
        </Card.Body>
        </Card>
        </a>

    )
}

export default Blog