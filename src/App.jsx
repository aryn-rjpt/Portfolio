import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Connect from './components/Connect.jsx'

function App() {  

  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Connect />
    </>
  )
}

export default App
