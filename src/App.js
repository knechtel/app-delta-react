import "./App.css";
import "./Component/NavBar";
import NavBar from "./Component/NavBar";
import Tabela from "./Component/Tabela";
import React, { useState, useEffect } from "react";

const App = () => {
  const [listClient, setListClient] = useState([]);

  function findAllClient() {
    console.log("passei aqui");
    fetch(`http://localhost:8080/client-findAll`)
      .then((res) => res.json())
      .then((data) => setListClient(data));
  }
  useEffect(() => {
    findAllClient();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <h1>Controle de Ordem de Serviço</h1>
      <br></br>
      <Tabela list={listClient} />
    </div>
  );
};

export default App;
