import React from 'react'
import {Row, Container} from 'react-bootstrap'
import Project from '../components/Project'
import brackIt from '../assets/brackIt.png'
import getTrails from '../assets/getTrails.png'
import brackItLogo from '../assets/BrackItLogo.png'
import getTrailsLogo from '../assets/getTrailsLogo.png'
import { Slide } from "react-awesome-reveal";

const projects = [{
    title: 'BrackIt',
    description: 'Tournament Bracket Generator built to help tournament hosts create and manage matchups, record scores and advance teams, while participants can follow along.',
    image: brackIt,
    logo: brackItLogo,
    frontend: 'https://github.com/lmonty22/brackIt-front-end',
    backend: 'https://github.com/lmonty22/brackIt-backend',
    loom: 'https://www.loom.com/embed/06a2cdcebfc74d2da1aa0d704d4786f3',
    skills: ['Ruby', 'Ruby on Rails', 'Javascript', 'ReactJS', 'Redux', 'Postgres', 'Bootstrap', 'TDD','Enzyme', 'Rpec'],
    link: 'https://brackit.netlify.app/'
    },
    {
    title: 'getTrails',
    description: 'Get out and enjoy the outdoors! Search for Trails, keep track of trails you want to hike or have already hiked. Comment on trails and leave a rating.',
    image: getTrails,
    logo: getTrailsLogo,
    frontend: 'https://github.com/marykang09/hikes_frontend',
    backend: 'https://github.com/marykang09/hikes_backend',
    loom: 'https://www.loom.com/embed/7adaebfc1a7742459eca2bf8706b68f5',
    skills: ['Ruby', 'Ruby on Rails', 'Javascript', 'ReactJS', 'AntDesign', 'Postgres'],
    link: 'https://get-trails.netlify.app/'
}]

const ProjectsContainer = (props) => {
    return(
        <Slide>
        <Container id='projects' style={{minHeight: props.height(window)}} fluid className='projects-container '>
            <h1 >Technical Projects</h1>
            <Row className='project-row'> 
                {projects.map(p => <Project project={p}/>)}
            </Row>
        </Container>
        </Slide>

    )
}

export default ProjectsContainer