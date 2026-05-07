import './App.css'

//! Imagem em assets

import night from "./assets/city.jpg"

function App() {
  return(
  <div className='App'>
    <h1>Avançando em React</h1>
    {/* Imagem em public */}
    <img src="/img1.jpg" alt="" srcset="" />
    {/* Imagem em assets */}
    <img src={} alt="" />
  </div>
  )
}
export default App
