import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
