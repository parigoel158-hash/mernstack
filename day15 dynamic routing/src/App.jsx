import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import React, { useState } from 'react'
import Weather from './components/Weather'
import Stopwatch from './components/Stopwatch'
import APICalling from './components/APICalling'
import ProductDetails from './components/ProductDetails'
import EffectWork from './components/EffectWork'
import Navbar from './components/navbar'
import DigitalClock from './components/DigitalClock'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Weather/>} />
        <Route path="/stopwatch" element={<Stopwatch/>} />
        <Route path="/productdetails" element={<ProductDetails/>} />
        <Route path="/effectwork" element={<EffectWork/>} />
        <Route path="/apicalling" element={<APICalling/>} />
        <Route path="/Digitalclock" element={<DigitalClock/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
