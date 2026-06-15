import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Outlet } from 'react-router-dom' 
import <Navbar></Navbar>
//!Link entre paginas 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Nav
      <Outlet/>
      <p>Footer</p>
    </div>
  )
}

export default App
