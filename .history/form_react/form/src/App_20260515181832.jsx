import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h1>Form em React</h1>
      {/* Form */}
      <MyForm userName="Vitoria" email="vih"/>
    </div>
  );
}

export default App;
