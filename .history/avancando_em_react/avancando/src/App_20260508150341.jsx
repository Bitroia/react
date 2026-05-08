import "./App.css";

//! useState

import Data from "./components/Data";

//! Imagem em assets

import night from "./assets/city.jpg";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <img src="/img1.jpg" alt="Alguma imagem" />
      {/* Imagem em assets */}
      <img src={night} alt="Outra imagem" />
      {/* useState */}
    </div>
  );
}
export default App;
