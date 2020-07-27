import React from 'react'
import {Row, Container} from 'react-bootstrap'
import Blog from '../components/Blog'
import { Slide } from "react-awesome-reveal";

const Blogs = [
    {   title: 'Hooked on Hooks',
        link: 'https://medium.com/@lmonty22/hooked-on-hooks-9590b941596e',
        date: 'July, 27 2020',
        image: 'https://miro.medium.com/max/1400/1*1LPM2n_d7qAsJZIXbviOyQ.png'
    },   
    {
    title: 'Shell Scripting made Simple',
    link: 'https://medium.com/@lmonty22/shell-scripting-made-simple-efe6f6b69043',
    date: 'July 20, 2020',
    image: 'https://miro.medium.com/max/1400/1*N201ChnesHowJ32m1Vrolw.jpeg'
    },  
    {
    title: 'Big O Notation & Avoiding Nested Loops',
    link: 'https://medium.com/@lmonty22/big-o-notation-avoiding-nested-loops-2924f3002a08',
    date: 'July 10, 2020',
    image: 'https://miro.medium.com/max/1400/1*FkQzWqqIMlAHZ_xNrEPKeA.png'
}
]

const BlogContainer = (props) => {
    return(
        <Slide >
        <Container id='blogs' fluid  style={{minHeight: props.height(window)}} className='blogs-container center'>
            <h1 >Blogs</h1>
            <Row className='blogs-row'>
                {Blogs.map( b=> <Blog blog={b} />)}
            </Row>
        </Container>
        </Slide>
    )
}

export default BlogContainer