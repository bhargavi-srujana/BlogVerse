import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ProductCard from './ProductCard'
import NavBar from './NavBar'
import SignUp from './SignUp'
import Home from './Home'
import Login from './Login'
import Create from './Create'
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <Routes >
      {/* <NavBar/> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <Home /> */}

      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/" element={<Create/>}/> */}
    </Routes>
  )
}

export default App
