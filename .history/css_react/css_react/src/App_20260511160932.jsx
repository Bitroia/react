import "./App.css";

//! Css de component

import MyComponent from "./componentes/MyComponent";

function App() {

//CSS inline dinamico
  const n = 15;
  
  return (
    <div className="App">
      {/* Css Global */}
      <h1>Css no React</h1>
      {/* Mycomponent */}
      <MyComponent />
      <p>Pegou o css do componente</p>
      {/* Inline Style */}
      <p
        style={{
          color: "black",
          padding: "25px",
          borderTop: "1px dotted blue",
        }}
      >
        Este elemento tem estilos inline
      </p>
      {/* Inline style dinamico */}
      <h2 style={n > 10 ? {color} : {}}>
        CSS dinâmico
      </h2>
    </div>
  );
}

export default App;
