import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Skills />
    </>
  )
}

export default App
