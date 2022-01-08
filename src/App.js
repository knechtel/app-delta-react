import "./App.css";
import "./Component/NavBar";
import NavBar from "./Component/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Controle de Ordem de Serviço</h1>
      <br></br>
      <center>
        <table>
          <tr>
            <td>Login</td>
            <td>
              <input type="text"></input>
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input type="password"></input>
            </td>
          </tr>
          <tr>
            <button>Enviar</button>
          </tr>
        </table>
      </center>
    </div>
  );
}

export default App;
