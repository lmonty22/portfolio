import React from 'react'
import {Badge} from 'react-bootstrap'
import { Card,Image,Button} from 'semantic-ui-react'

class Project extends React.Component {
 
  render() {
      const {link, logo, image, description, loom, frontend, backend, skills} = this.props.project
    return (
        <a target='_blank' rel="noopener noreferrer" href={link}>
        <Card fluid className='card' >
             <Card.Header className='project-header'><Image src={logo}/></Card.Header>
        <Card.Content>
            <Card.Description>
           <Image variant="top" className='card-image' src={image} />
            </Card.Description>
        </Card.Content>
            <Card.Content extra>
            <Card.Description>
                <div> {description} </div>
                <div>{skills.map(s => <Badge className='skills'>{s}</Badge>)}</div> 
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a target='_blank' rel="noopener noreferrer" href={loom}><Button className='btn-light'>Loom Demo</Button></a>
                <a target='_blank' rel="noopener noreferrer" href={frontend}><Button className='btn-light'>Frontend Repo</Button></a>
                <a target='_blank' rel="noopener noreferrer" href={backend}><Button className='btn-light'>Backend Repo</Button></a>
            </Card.Content>
            <Card.Content extra>
                <a target='_blank' rel="noopener noreferrer" href={link}><Button className='btn-primary'>Check it Out!</Button></a>
            </Card.Content>
        </Card>
        </a>
    )
  }
}

export default Project