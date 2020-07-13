import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from "react-router-dom"

class NavBar extends Component{
    state = {
        activeItem: null
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


render(){
    const { activeItem } = this.state
    return(
 <Menu className='menu center navbar' >
    <Link to='/'> 
         <Menu.Item name='Home' 
         active={activeItem === 'Home'}
         onClick={this.handleItemClick}/>
    </Link> 
    <Link to='/about'>
        <Menu.Item name='About'
        active={activeItem === 'About'}
        onClick={this.handleItemClick}/>
    </Link>
    <Link to='/projects'>
        <Menu.Item name='Projects'
        active={activeItem === 'Projects'}
        onClick={this.handleItemClick}/>
    </Link>
    <Link to='/blog'>
        <Menu.Item name='Blog'
        active={activeItem === 'Blog'}
        onClick={this.handleItemClick}/>
    </Link>
    <Link to='/contact'>
        <Menu.Item name='Contact'
        active={activeItem === 'Contact'}
        onClick={this.handleItemClick}/>
    </Link>
</Menu>)}
}

export default NavBar