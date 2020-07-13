import React, { Component } from 'react'
import { Menu, Sticky } from 'semantic-ui-react'
import { HashLink as Link } from 'react-router-hash-link';

class NavBar extends Component{
    state = {
        activeItem: null
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


render(){
    const { activeItem } = this.state
    return(
<Sticky >
 <Menu className='menu center navbar' >
    <Link to='/#home'> 
         <Menu.Item name='Home' 
         active={activeItem === 'Home'}
         onClick={this.handleItemClick}/>
    </Link> 
    <Link to='/#about'>
        <Menu.Item name='About'
        active={activeItem === 'About'}
        onClick={this.handleItemClick}/>
    </Link>
    <Link to='/#projects'>
        <Menu.Item name='Projects'
        active={activeItem === 'Projects'}
        onClick={this.handleItemClick}/>
    </Link>
    <Link to='/#blogs'>
        <Menu.Item name='Blogs'
        active={activeItem === 'Blog'}
        onClick={this.handleItemClick}/>
    </Link>
    <Link to='/#contact'>
        <Menu.Item name='Contact Me'
        active={activeItem === 'Contact Me'}
        onClick={this.handleItemClick}/>
    </Link>
</Menu>
</Sticky>
)}
}

export default NavBar