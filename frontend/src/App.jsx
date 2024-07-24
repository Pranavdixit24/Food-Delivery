import React, { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from "./components/footer/footer"
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import { Routes,Route } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
// import {brows}

const App = () => {
  const [showLogin,setShowLogin]=useState(false)

  return (
   <>
    {showLogin? <LoginPopUp setShowLogin={setShowLogin}/> :<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>

      </div>
      <Footer/>
   </>
  )
}

    

// cartContext left to log dishes on console
export default App
