import React, { Component } from 'react'
import { Col} from 'react-bootstrap'
import { Button, Form } from 'semantic-ui-react'
import { Fade } from "react-awesome-reveal";

class Contact extends Component {
    constructor(){
        super()
    }
    render(){
    return(
        <Fade>
            <div className='contact-Form contact'>
            <Col style={{maxWidth:'500px'}}>
                <h3>Contact Me! </h3>
                <Form>
                    <Form.Input fluid label='Name' placeholder='Your Name'  />
                    <Form.Input fluid label='Email' placeholder='Your Email' />
                    <Form.TextArea fluid label='Message' placeholder='Your Message' />
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            </Col>
            </div>
        </Fade>
    )
    }
}

export default Contact