import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { sales_listEquipment } from "./Component/sales";
import {
  BrowserRouter as BrowserRouter,
  Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import RegisterOs from "./Component/RegisterOs";
export const TreesContext = createContext({});
ReactDOM.render(
  <TreesContext.Provider value={{ sales_listEquipment }}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/create-os"
          element={<RegisterOs value={{ sales_listEquipment }} />}
        />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </TreesContext.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
