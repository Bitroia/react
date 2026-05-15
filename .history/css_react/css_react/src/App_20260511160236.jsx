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
      <p>Este elemento tem estilo</p>
    </div>
  )
}

export default App
