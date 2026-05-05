import "./App.css";

//! Importando componente

import FirstComponent from "./components/FirstComponent";


//! Template Expression

import TemplateExpression from "./components/TemplateExpression";

//! Hierarquia de componentes




function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent/>
    </div>
  );
}

export default App;
