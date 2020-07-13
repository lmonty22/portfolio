import React from 'react';
import './App.css';
import Home from './containers/Home';
import About from './components/About'
import ProjectsContainer from './containers/ProjectsContainer';
import BlogContainer from './containers/BlogContainer'
import ContactForm from './components/ContactForm'
import NavBar from './components/NavBar'
import Footer from './components/Footer'




function App() {
  return (
    <div className='app'> 
      <NavBar/>
      <Home/>
      <About a='#about' />
      <ProjectsContainer />
      <BlogContainer />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
