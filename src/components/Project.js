import React from 'react'
import {Row, Badge} from 'react-bootstrap'
import { Card,Image,Button} from 'semantic-ui-react'


const Project = (props) => {
    return(
        <a  target="_blank" href={props.link}>
        <Card fluid className='card' >
             <Card.Header style={{fontWeight:'bold'}}><h1>{props.title}</h1>
             </Card.Header>
        <Card.Content>
            <Card.Description>
            <a  target="_blank" href={props.link}><Image variant="top" className='card-image' src={props.image} /></a>
            <Row>
                {props.description}
            </Row>
            </Card.Description>
        </Card.Content>
            <Card.Content extra>
            <Card.Description>
            <Row className='card-links'>
            <a target="_blank" href={props.loom}><Button variant='primary'>Watch Demo </Button></a>
            <a target='_blank' href={props.backend}><Button variant='primary'>Backend Repo </Button></a>
            <a target='_blank' href={props.frontend}><Button variant='primary'>Frontend Repo</Button></a>
            </Row>
            </Card.Description>
            </Card.Content>

        <Card.Content extra>
            <Row className='card-links'>
            {props.skills.map(s =><Badge className='badge-info'> {s} </Badge> )}
            </Row>
        </Card.Content>
            <Card.Content extra>
            <a target="_blank" href={props.link}><Button variant='primary'>Check it out!</Button></a>
            </Card.Content>
        </Card>
        </a>
    )
}

export default Project