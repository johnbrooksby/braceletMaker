import { useState } from 'react'
import './App.css'
import Header from "./Header.jsx"
import Navbar from './Navbar.jsx'
import Drag from './DragNDrop.jsx'
import Sample from './SampleColors.jsx'

function App() {

  return (
    <div>
      <Header />
      <Navbar />
      <Drag />
      {/* <Sample /> */}
    </div>
  )
}

export default App
