import "./App.css";

//! Importando componente

import FirstComponent from "./components/FirstComponent";


//! Template Expression

import TemplateExpression from "./components/TemplateExpression";

//! Hierarquia de componentes
import MyComponent from "./components/MyComponent";

//! Eventos

import { Events } from "./components/Events";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent/>
      <Events/>
    </div>
  );
}

export default App;
