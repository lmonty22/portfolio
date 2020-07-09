import React from 'react'
import {Row, Card, Image, Col} from 'react-bootstrap'



const Home = (props) => {
    return(
        <Col >
        <Card hoverable >
              <a  target="_blank" href={props.link}><Card.Img variant="top" className='card-image' src={props.image} /></a>
        <Card.Body>
             <Card.Title style={{fontWeight:'bold'}}>{props.title}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
        </Card.Body>
        <Card.Body>
            <Card.Link target="_blank" href={props.link}>Check it out!</Card.Link>
            <Card.Link target="_blank" href={props.loom}>Watch Demo</Card.Link>
            <Card.Link target='_blank' href={props.backend}>Backend Repo</Card.Link>
            <Card.Link target='_blank' href={props.frontend}>Frontend Repo</Card.Link>
        </Card.Body>
        </Card>
        </Col>

    )
}

export default Home