import React from 'react'
import {Row, Container} from 'react-bootstrap'
import Project from '../components/Project'
import brackIt from '../assets/brackIt.png'
import getTrails from '../assets/getTrails.png'

const bracktItDescription = 'Tournament Bracket Generator built to help tournament hosts create and manage matchups, record scores and advance teams, while participants can follow along.'
const getTrailsDescription= 'Search for Trails and keep track of trails you want to hike or have already hiked.'
const brackitBackend = 'https://github.com/lmonty22/brackIt-backend'
const brackitFrontend = 'https://github.com/lmonty22/brackIt-front-end'
const hikesBackend = 'https://github.com/marykang09/hikes_backend'
const hikesFrontend = 'https://github.com/marykang09/hikes_frontend'
const brackitLoom = 'https://www.loom.com/share/06a2cdcebfc74d2da1aa0d704d4786f3'
const hikesLoom = 'https://www.loom.com/share/7adaebfc1a7742459eca2bf8706b68f5'
const ProjectsContainer = () => {
    return(
        <Container fluid className='projects-container'>
            <h1 >Technical Projects</h1>
            <Row className='project-row'> 
                <Project title={'BrackIt'} image={brackIt} description={bracktItDescription} link={'https://brackit.netlify.app/'} frontend={brackitFrontend} backend={brackitBackend} loom={brackitLoom}/>
                <Project title={'getTrails'} image={getTrails} description={getTrailsDescription} link={'https://get-trails.netlify.app/'} frontend={hikesFrontend} backend={hikesBackend} loom={hikesLoom}/>
            </Row>
        </Container>

    )
}

export default ProjectsContainer