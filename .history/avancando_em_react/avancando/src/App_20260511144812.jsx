import "./App.css";

//! useState

import Data from "./components/Data";

//! ListRender

import ListRender from "./components/ListRender";

//! ConditionalRender

import ConditionalRender from "./components/ConditionalRender";

//! Props

import ShowUserName from "./components/ShowUserName";

//! Imagem em assets

import night from "./assets/city.jpg";

//! Desestruturando props

import 

function App() {
  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <img src="/img1.jpg" alt="Alguma imagem" />
      {/* Imagem em assets */}
      <img src={night} alt="Outra imagem" />
      {/* useState */}
      <Data />
      {/* ListRender */}
      <ListRender />
      {/* ConditionalRender */}
      <ConditionalRender />
      {/* Props */}
      <ShowUserName name="Vitoria" />
    </div>
  );
}
export default App;
