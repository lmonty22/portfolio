import React from 'react'
import {Row, Col, Badge} from 'react-bootstrap'
import { Card,Image,Button } from 'semantic-ui-react'


const Project = (props) => {
    return(
        <a  target="_blank" href={props.link}>
        <Card fluid className='card' >
        <Card.Content>
             <Card.Header style={{fontWeight:'bold'}}><h1>{props.title}</h1></Card.Header>
              <a  target="_blank" href={props.link}><Image variant="top" className='card-image' src={props.image} /></a>
            <div className='card-links'>
            <a target="_blank" href={props.link}><Button variant='primary'>Check it out!</Button></a>
            <a target="_blank" href={props.loom}><Button variant='primary'>Watch Demo </Button></a>
            <a target='_blank' href={props.backend}><Button variant='primary'>Backend Repo </Button></a>
            <a target='_blank' href={props.frontend}><Button variant='primary'>Frontend Repo</Button></a>
            </div>
            <h3 className='card-links'>
            {props.skills.map(s =><Badge className='badge-info'> {s} </Badge> )}
            </h3>
            <Card.Description>
                {props.description}
            </Card.Description>
        </Card.Content>
        </Card>
        </a>
    )
}

export default Project