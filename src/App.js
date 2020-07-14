import React from 'react';
import './App.css';
import Home from './containers/Home';
import About from './components/About'
import ProjectsContainer from './containers/ProjectsContainer';
import BlogContainer from './containers/BlogContainer'
import ContactForm from './components/ContactForm'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ImageBar from './components/ImageBar'
import kayaking from './assets/kayaking.jpeg'
import uxbridge from './assets/uxbridge.jpg'


const getHeight = (window) => {
  return window.innerHeight
}

function App() {
  return (
    <div className='app'> 
      <NavBar/>
      <Home height={getHeight}/>
      <About a='#about'  height={getHeight}/>
      <ProjectsContainer height={getHeight} />
      <ImageBar image={kayaking} />
      <BlogContainer height={getHeight}/>
      <ImageBar image={uxbridge}/>
      <ContactForm height={getHeight}/>
      <Footer />
    </div>
  );
}

export default App;
