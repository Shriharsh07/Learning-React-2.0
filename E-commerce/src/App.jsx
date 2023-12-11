import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import Cart from './pages/Cart'

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
