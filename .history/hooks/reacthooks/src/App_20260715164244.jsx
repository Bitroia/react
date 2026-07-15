import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return(
    <div className='App'>
      <ul>
        <li>
          
        </li>
        <li><Link to="/"/>Contatos</li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default App
