import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Header.jsx"
import Navbar from './Navbar.jsx'
import Home from './Home1.jsx'
import Mono from '../Monochrome.jsx'
import Pastels from '../SoftPastels.jsx'
import Minimalist from '../ModernMinimalist.jsx'

function App() {

  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <Mono />
      <Pastels />
      <Minimalist />
    </div>
  )
}

export default App
