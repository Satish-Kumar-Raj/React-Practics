import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Home from './Home.jsx'
function App() {
 
<p></p>
  return (
   <Router>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/Home" element={<Home/>} />
    </Routes>
   </Router>
  )
}

export default App
