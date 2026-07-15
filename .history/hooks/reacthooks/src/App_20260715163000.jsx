import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  return(
    <div className='App'>
      <ul>
        <li></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default App
