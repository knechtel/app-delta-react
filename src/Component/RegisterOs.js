import NavBar from "./NavBar";
import React, { useState } from "react";
import DataTableCreateClient from "./DataTableRegistraOs";
import { CREATE_CLIENT, CREATE_EQUIPMENT } from "./urls";
const RegisterOs = () => {
  const [showClientMessage, setShowClientMessage] = useState(false);
  const [showEquipmentMessage, setShowEquipmentMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  var [marca, setMarca] = useState("");
  var [modelo, setModelo] = useState("");
  var [serial, setSerial] = useState("");
  var [defeito, setDefeito] = useState("");
  const [equipmentList, setEquipmentList] = useState([]);
  var listEquipment; //remover
  const [postId, setPostId] = useState(2);

  var id = 0;

  async function clientCreate() {
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
    setShowClientMessage(true);
    e.preventDefault();
    await clientCreate();
    setPostId(id);
    await delay(2000);
    setShowClientMessage(false);
  }
  async function equipmentCreate(e) {
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
      setEquipmentList(listEquipment);
      setShowEquipmentMessage(true);
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
    setShowEquipmentMessage(false);
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
        {showClientMessage && (
          <p className="alert alert-success visible" data-fragment-index="0">
            Cliente cadastrado com sucesso!
          </p>
        )}
        {showEquipmentMessage && (
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
        <div></div>
        <form onSubmit={equipmentCreate}>
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
        <DataTableCreateClient listAparelho={[...equipmentList]} />
      </div>
    </>
  );
};
export default RegisterOs;
