import React from 'react'
import {Row, Badge} from 'react-bootstrap'
import { Card,Image,Button, Modal, Header, Embed} from 'semantic-ui-react'

class Project extends React.Component {
 
  render() {
    return (
        <a target='_blank' href={this.props.project.link}>
        <Card fluid className='card' >
             <Card.Header className='project-header'><Image src={this.props.project.logo}/></Card.Header>
        <Card.Content>
            <Card.Description>
           <Image variant="top" className='card-image' src={this.props.project.image} />
            </Card.Description>
        </Card.Content>
            <Card.Content extra>
            <Card.Description>
                <div> {this.props.project.description} </div>
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a target='_blank' href={this.props.project.loom}><Button className='btn-light'>Loom Demo</Button></a>
                <a target='_blank' href={this.props.project.frontend}><Button className='btn-light'>Frontend Repo</Button></a>
                <a target='_blank' href={this.props.project.backend}><Button className='btn-light'>Backend Repo</Button></a>
            </Card.Content>
            <Card.Content extra>
                <a target='_blank' href={this.props.project.link}><Button className='btn-primary'>Check it Out!</Button></a>
            </Card.Content>
        </Card>
        </a>
    )
  }
}

export default Project