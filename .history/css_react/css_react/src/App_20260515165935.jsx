import "./App.css";
//! Css de component

import MyComponent from "./componentes/MyComponent";
import Title from "./componentes/Title";

function App() {
  //CSS inline dinamico
  const n = 15;

  //! Classes dinâmicas
  const redTitle = true;

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
      <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 20 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico
      </h2>
      {/* classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter uma classe</h2>
      {/* Css modules */}
      <Title/>
    </div>
  );
}

export default App;
