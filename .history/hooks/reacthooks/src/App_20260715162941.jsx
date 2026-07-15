import { useState } from 'react'

import heroImg from './assets/hero.png'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  return(
    <div className='App'>
      <Outlet/>
    </div>
  )
}

export default App
