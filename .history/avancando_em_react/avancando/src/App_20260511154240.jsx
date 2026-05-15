import "./App.css";

import { useState } from "react";

//! Desestruturando props

import CarDetails from "./components/CarDetails";

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

//! Renderização de listas

const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 2000 },
  { id: 3, brand: "Renault", color: "Azul", km: 323333 },
];

//! Fragments

import Fragments from "./components/Fragments";

//! Children

import Container from "./components/Container";

//! Função em prop

import ExecuteFunction from "./components/ExecuteFunction";
 
//! State lift

import Message from "./components/Message"; 

// 

function App() {

  //! Função em prop
  function ShowMessage() {
    console.log("Evento do componente pai");
  }

  //! State lift

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

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
      {/* Car Details */}
      <CarDetails brand="VW" km={999} color="Vermelho" />
      {/*   Reaproveitamento de componentes */}
      <CarDetails brand="fiat" km={124556} color="Branco" />
      <CarDetails brand="Audi" km={47383} color="Preto" />
      {/* Renderização de lista com componente */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      {/* Fragments */}
      <Fragments />
      {/* Children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      {/* Funçãa em prop */}
      <ExecuteFunction myFunction={ShowMessage} />
      {/* State lift */}
      <Message msg={message}/>
    </div>
  );
}
export default App;
