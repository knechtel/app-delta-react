import NavBar from "./NavBar";
import React, { useState } from "react";

function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    };

    fetch("http://localhost:8080/client-create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        cpf: cpf,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log("error"));
    alert("Form Submitted" + name + email + " foi ");
  };
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
          <h2 style={styleH1}>Aparelho </h2>
        </form>
      </div>
    </>
  );
}
export default RegisterUser;
