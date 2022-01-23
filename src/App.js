import "./App.css";
import "./Component/NavBar";
import NavBar from "./Component/NavBar";
import React, { useState, useEffect } from "react";
import TabelaClient from "./Component/TabelaClient";

const App = () => {
  const [listClient, setListClient] = useState([]);

  function findAllClient() {
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
      <TabelaClient list={listClient} />
    </div>
  );
};

export default App;
