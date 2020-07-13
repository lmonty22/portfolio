import React from 'react'
import {Row, Container} from 'react-bootstrap'
import Blog from '../components/Blog'
import { Fade } from "react-awesome-reveal";

const Blogs = [{
    title: 'Big O Notation & Avoiding Nested Loops',
    link: 'https://medium.com/@lmonty22/big-o-notation-avoiding-nested-loops-2924f3002a08',
    date: 'July 10, 2020',
    image: 'https://miro.medium.com/max/1400/1*FkQzWqqIMlAHZ_xNrEPKeA.png'
},
{   title: 'Finding my new Identity through Flatiron 🏊🏼‍♀️ 👩🏼‍💻',
    link: 'https://medium.com/@lmonty22/finding-my-new-identity-through-flatiron-%EF%B8%8F-7d5659267c2d',
    date: 'June 3, 2020',
    image: 'https://miro.medium.com/max/1242/1*-xtv0ezquErkY5HNMBHouA.jpeg'
},
{   title: 'Intro to React Developer Tools',
    link: 'https://medium.com/@lmonty22/intro-to-react-developer-tools-9f77856b64ec',
    date: 'May 13, 3030',
    image: 'https://miro.medium.com/max/1400/1*RBsXvMIsLm9M6fRDHzfr3w.png'
}

]

const BlogContainer = () => {
    return(
        <Fade >
        <Container id='blogs' fluid className='blogs-container center'>
            <h1 >Blogs</h1>
            <Row className='blogs-row'>
                {Blogs.map( b=>  <Blog blog={b} />)}
            </Row>
        </Container>
        </Fade>
    )
}

export default BlogContainer