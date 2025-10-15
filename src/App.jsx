import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
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
      <Helmet>
        <title>Sumuk - Full Stack Developer & AI Enthusiast | Portfolio</title>
        <meta name="description" content="Sumuk is a Full Stack Developer and AI Enthusiast based in India. Explore my portfolio to see my projects, skills, and experience in web development and artificial intelligence." />
        <link rel="canonical" href="https://sumuk.me/" />
      </Helmet>
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
