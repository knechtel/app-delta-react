import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";
import { sales } from "./sales.js";
import DataGrid, {
  Column,
  FilterRow,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  Selection,
} from "devextreme-react/data-grid";

function RegisterOs() {
  const selectedKeys = [
    10273, 10277, 10292, 10295, 10300, 10302, 10305, 10308, 10312, 10319, 10321,
    10323, 10326, 10328, 10331, 10334, 10335, 10341, 10351, 10353, 10356, 10362,
    10367, 10373, 10376, 10383, 10387,
  ];

  const tableDetailColumnExtensions = [
    { columnName: "startDate", width: 115 },
    { columnName: "dueDate", width: 115 },
    { columnName: "priority", width: 100 },
    { columnName: "status", width: 125 },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [serial, setSerial] = useState("");
  const [defeito, setDefeito] = useState("");
  const [postId, setPostId] = useState(2);
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
  useEffect(() => {
    console.log("Did mount maiquel");
    return function () {
      //code to be run during unmount phase
    };
  }, []);
  async function submitHandler(e) {
    e.preventDefault();
    await fetchFunction();
    setPostId(id);
    console.log(name + "aqui maiquel -------->" + id);
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

      const json = await response.json();
      console.log("aqui");
      console.log(json.id);
      setPostId(json.id);
      setMarca("");

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
        <DataGrid
          dataSource={sales}
          keyExpr={"orderId"}
          allowColumnReordering={true}
          defaultSelectedRowKeys={selectedKeys}
        >
          <Grouping autoExpandAll={true} border="1" />
          <FilterRow visible={true} />
          <Selection mode={"multiple"} />

          <Column
            dataField={"orderId"}
            caption={"Order ID"}
            allowSorting={false}
            allowFiltering={false}
            allowGrouping={false}
            allowReordering={false}
            width={100}
          />
          <Column dataField={"city"} />
          <Column dataField={"country"} sortOrder={"asc"} />

          <Column
            dataField={"date"}
            dataType={"date"}
            selectedFilterOperation={">="}
            filterValue={"2013/04/01"}
            width={150}
          />
          <Column
            dataField={"amount"}
            format={"currency"}
            selectedFilterOperation={">="}
            filterValue={1000}
            width={100}
          />

          <Pager allowedPageSizes={[5, 10, 20]} showPageSizeSelector={true} />
          <Paging defaultPageSize={10} />
        </DataGrid>
      </div>
    </>
  );
}
export default RegisterOs;
