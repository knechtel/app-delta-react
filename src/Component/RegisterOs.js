import NavBar from "./NavBar";
import React, { useState, useEffect, useContext, useReducer } from "react";
import { sales } from "./sales.js";
import { sales_listEquipment } from "./sales.js";
import DataTable from "./DataTable";
import { TreesContext } from "../index";
const RegisterOs = (list) => {
  useEffect(() => {
    // setListEquipement(sales_listEquipment);
    console.log("maiuel");

    return function () {
      //code to be run during unmount phase
    };
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  var [marca, setMarca] = useState("");
  var [modelo, setModelo] = useState("");
  var [serial, setSerial] = useState("");
  var [defeito, setDefeito] = useState("");
  const [newList, setNewList] = useState([]);
  //var [listEquipment, setListEquipement] = useState(sales_listEquipment);

  var [listEquipment, setListEquipement] = useReducer(
    (listEquipment, newList) => {
      listEquipment = newList;
      setNewList(newList);
      return newList;
    }
  );
  const [postId, setPostId] = useState(2);

  useEffect(() => {
    console.log("mudou");
  }, [listEquipment]);

  var id = 0;

  async function fetchFunction() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    };
    try {
      const response = await fetch(`http://localhost:8080/client-create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          cpf: cpf,
        }),
      });

      const json = await response.json();
      console.log("aqui");
      console.log(json.id);
      setPostId(json.id);

      id = json.id;
    } catch (err) {
      throw err;
      console.log(err);
    }
  }

  async function submitHandler(e) {
    e.preventDefault();
    await fetchFunction();
    setPostId(id);
    // setListEquipement(sales_listEquipment);

    // data para aparecer isso 1/1/2013
  }
  async function submitHandlerEquipment(e) {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    };
    try {
      const response = await fetch(`http://localhost:8080/create-equipment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brand: marca,
          model: modelo,
          serial: serial,
          idClient: postId,
          defectForRepair: defeito,
        }),
      });
      // eslint-disable-next-line no-unused-vars

      const json = await response.json();

      var apaerelho1 = {
        marca: marca,
        model: modelo,
        serial: serial,
        idClient: postId,
        defectForRepair: defeito,
      };
      if (listEquipment == null) listEquipment = new Array();
      listEquipment.push(apaerelho1);
      setListEquipement(listEquipment);
      setMarca("");
      setModelo("");
      setSerial("");
      setDefeito("");

      console.log(listEquipment);
      console.log("id " + postId);
      id = json.id;
    } catch (err) {
      throw err;
      console.log(err);
    }
  }
  const mystyle = {
    alignItems: "center",
    justifyContent: "center",
    padding: "40",
    width: "30%",
    marginLeft: "50px",
  };
  const styleH1 = {
    alignItems: "center",
    justifyContent: "center",
    padding: "40",
    width: "30%",
    marginLeft: "50px",
  };

  return (
    <>
      <NavBar />
      <h1 style={styleH1}>Cadastro de cliente</h1>
      <div>
        <form onSubmit={submitHandler}>
          <table style={mystyle}>
            <tr>
              <td>Nome</td>
              <td>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Cpf</td>
              <td>
                <input
                  type="text"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <button>Enviar</button>
            </tr>
          </table>
        </form>
        <form onSubmit={submitHandlerEquipment}>
          <h2 style={styleH1}>Aparelho </h2>
          <table style={mystyle}>
            <tr>
              <td>Marca</td>
              <td>
                <input
                  type="text"
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Modelo</td>
              <td>
                <input
                  type="text"
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Serial</td>
              <td>
                <input
                  type="text"
                  value={serial}
                  onChange={(e) => setSerial(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Defeito</td>
              <td>
                <input
                  type="text"
                  value={defeito}
                  onChange={(e) => setDefeito(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <button>Enviar</button>
            </tr>
          </table>
        </form>
        <h3 style={styleH1}>Aparelhos com mesma os</h3>
        <DataTable test={[...newList]} />
      </div>
    </>
  );
};
export default RegisterOs;
