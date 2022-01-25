import NavBar from "./NavBar";
import React, { useState, useEffect, useReducer } from "react";
import {
  FIND_BY_ID_CLIENT,
  CREATE_CLIENT,
  CREATE_EQUIPMENT,
  FIND_ALL_EQUIPMENT_BY_CLIENT,
} from "./urls";
import { useParams } from "react-router-dom";
import DataTableEdit from "./DataTableEdit";

const EditOsAparelho = () => {
  const [client, setClient] = useState([]);

  const params = useParams();
  const [mostra, setMostra] = useState(false);
  const [showAparelho, setShowAparelho] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  var [marca, setMarca] = useState("");
  var [modelo, setModelo] = useState("");
  var [serial, setSerial] = useState("");
  var [defeito, setDefeito] = useState("");
  const [newList, setNewList] = useState([]);

  const findByIdClient = async (id) => {
    try {
      const response = await fetch(FIND_BY_ID_CLIENT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });

      const json = await response.json();

      setName(json.name);
      setEmail(json.email);
      setCpf(json.cpf);
      setClient(json);
    } catch (err) {
      throw err;
      console.log(err);
    }

    setName(client.name);
  };

  const findClientByEquipment = async (id) => {
    try {
      const response = await fetch(FIND_ALL_EQUIPMENT_BY_CLIENT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });

      const json = await response.json();
      console.log("findByAllEquipment");
      console.log(json.listEquipment);
      setNewList(json.listEquipment);
    } catch (err) {
      throw err;
      console.log(err);
    }

    setName(client.name);
  };

  useEffect(() => {
    findByIdClient(params.id);
    findClientByEquipment(params.id);
    console.log(params.id);
  }, [params.id]);
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
  }, []);

  var id = 0;

  async function fetchFunction() {
    try {
      const response = await fetch(CREATE_CLIENT, {
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

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  async function submitHandler(e) {
    setMostra(true);
    e.preventDefault();
    await fetchFunction();
    setPostId(id);
    await delay(2000);
    setMostra(false);
  }
  async function submitHandlerEquipment(e) {
    e.preventDefault();

    try {
      const response = await fetch(CREATE_EQUIPMENT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          brand: marca,
          model: modelo,
          serial: serial,
          idClient: postId,
          defectForRepair: defeito,
        }),
      });

      const json = await response.json();

      var apaerelho1 = {
        id: json.id,
        marca: marca,
        model: modelo,
        serial: serial,
        idClient: postId,
        defectForRepair: defeito,
      };
      if (listEquipment == null) listEquipment = new Array();
      listEquipment.push(apaerelho1);
      setListEquipement(listEquipment);
      setShowAparelho(true);
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
    await delay(1000);
    setShowAparelho(false);
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
      <div>
        {mostra && (
          <p className="alert alert-success visible" data-fragment-index="0">
            Cliente cadastrado com sucesso!
          </p>
        )}
        {showAparelho && (
          <p className="alert alert-success visible" data-fragment-index="0">
            Aparelho cadastrado com sucesso!
          </p>
        )}
      </div>
      <h1 style={styleH1}>Cadastro de cliente</h1>
      <div>
        <form onSubmit={submitHandler}>
          <table style={mystyle}>
            <tr>
              <td>Nome</td>
              <td>
                <input
                  disabled="disabled"
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
                  disabled="disabled"
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
                  disabled="disabled"
                  type="text"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </td>
            </tr>
          </table>
        </form>
        <div></div>

        <h3 style={styleH1}>Aparelhos com mesma os</h3>
        <DataTableEdit listAparelho={[...newList]} />
      </div>
    </>
  );
};
export default EditOsAparelho;
