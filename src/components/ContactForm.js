import React, { Component } from 'react'
import {Form} from 'semantic-ui-react'

class ContactForm extends Component{
    state = {
        name: '',
        email: '',
        message: '',
        error: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    error = () => {
        this.setState({
            ...this.state,
            error:'I want to know everything! Please fill out all the fields below.'
            })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.name.length > 0 && this.state.email.length > 0 && this.state.message.length > 0){
            this.sendEmail(this.state)
        }else {
            this.error()
        }
    }

    sendEmail = (variables) => {
        window.emailjs.send("gmail", "template_l39VwjQ4", 
                variables).then(res => {
                    alert('Your email has successfully been sent!')
                    this.setState({
                        name: '',
                        email: '',
                        message: '',
                        error: ''
                    })
            })
            // Handle errors 
            .catch(err => 
                alert('Something went wrong... try again.', err))
    }

    render(){
        return(
            <div id='contact' style={{height: this.props.height(window)}} class='contact-Form'>
                <h1>Lets Build Something Together!</h1>
                <Form>
                      {this.state.error.length > 0 ? <div>{this.state.error}</div>: null }
                    <Form.Input name='name' label='Name' placeholder='Name' onChange={this.onChange} value={this.state.name} />
                    <Form.Input name='email' label='Email' placeholder='Email' onChange={this.onChange} value={this.state.email}/>
                    <Form.TextArea name='message' label='Message' placeholder='Message' onChange={this.onChange} value={this.state.message}/>
                    <Form.Button  onClick={this.onSubmit}>Send Email</Form.Button>
                </Form>
            </div>
        )
    }
}

export default ContactForm