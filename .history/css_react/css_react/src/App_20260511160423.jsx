import './App.css'

//! Css de component

import MyComponent from './componentes/MyComponent'

function App() {
  return(
    <div className='App'>
      {/* Css Global */}
      <h1>Css no React</h1>
      {/* Mycomponent */}
      <MyComponent/>
      <p>Pegou o css do componente</p>
      {/* Inline Style */}
      <p style={{color:"black", padding: "25px", borderTop: "1px solid "}}>Este elemento tem estilos inline</p>
    </div>
  )
}

export default App
