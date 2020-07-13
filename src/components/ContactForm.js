import React, { Component } from 'react'
import {Form } from 'semantic-ui-react'

class ContactForm extends Component{
    state = {
        name: '',
        email: '',
        message: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.sendEmail(this.state)
    }

    sendEmail = (variables) => {
        window.emailjs.send("gmail", "template_l39VwjQ4", 
                variables).then(res => {
                    alert('Your email has successfully been sent!')
                    this.setState({
                        name: '',
                        email: '',
                        message: ''
                    })
            })
            // Handle errors 
            .catch(err => 
                alert('Something went wrong... try again.', err))
    }

    render(){
        return(
            <div id='contact' class='contact-Form'>
                <h1>Contact me!</h1>
                <Form>
                    <Form.Input name='name' label='Name' placeholder='Your Name' onChange={this.onChange} value={this.state.name} />
                    <Form.Input name='email' label='Email' placeholder='Your Email' onChange={this.onChange} value={this.state.email}/>
                    <Form.TextArea name='message' label='Message' placeholder='Your Message' onChange={this.onChange} value={this.state.message}/>
                    <Form.Button onClick={this.onSubmit}>Send</Form.Button>
                </Form>
            </div>
        )
    }
}

export default ContactForm