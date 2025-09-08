import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Connect from './components/Connect.jsx'
import Loader from './components/Loader.jsx'

function App() {  

  useEffect(() => {
    const loader = document.querySelector('.spinner-container');
    window.onload = function() {      
      loader.style.opacity = 0;
      setTimeout(() => {
        loader.style.display = 'none';
      }, 1000);
    }
    setTimeout(() => {
      loader.style.opacity = 0;
      setTimeout(() => {
        loader.style.display = 'none';
      }, 1000);
    }, 7000);

    
  }, [])

  return (
    <>
      <Loader />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Connect />
    </>
  )
}

export default App
