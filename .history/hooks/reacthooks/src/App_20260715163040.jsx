import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return(
    <div className='App'>
      <ul>
        <li><Link to=/></li>
        <li></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default App
