import "./App.css";

//! Importando componente

import FirstComponent from "./components/FirstComponent";
import MyComponent from "./components/MyComponent";

//! Template Expression

import TemplateExpression from "./components/TemplateExpression";

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
