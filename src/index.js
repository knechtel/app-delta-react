import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

import {
  BrowserRouter as BrowserRouter,
  Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import RegisterOs from "./Component/RegisterOs";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/create-os" element={<RegisterOs />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
