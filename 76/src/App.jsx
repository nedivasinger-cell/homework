import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Sidebar from './sidebar.jsx'
import Map from './Map.jsx'

function App() {
  return (
    <>
      <Sidebar />
      <Map />
    </>
  )
}

export default App
