import React from 'react'
import {Row, Container, Image} from 'react-bootstrap'
import pool from '../assets/pool.jpg'


const HomeContainer = () => {
    return(
        <Container fluid className='splash'>
            <Image src={pool} fluid />
            <h1 className='name-header'>Lindsay Montgomery</h1>
      </Container>

    )
}

export default HomeContainer