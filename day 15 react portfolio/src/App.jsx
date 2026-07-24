import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Github from './components/Github'
import Linkedin from './components/Linkedin'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/about' element={<About />} />
      <Route path='/project' element={<Project />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/Skills' element={<Skills />} />
      <Route path='/Github' element={<Github />} />
      <Route path='/Linkedin' element={<Linkedin />} />
    </Routes>
    </BrowserRouter>
  
    </>
  )
}
export default App
