import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import { Login } from "./Pages/Login";


export const App: React.FC= ()=> {
  return (
    <div className="App">
      <Route path="/" element={<Login/>} />
      <Route path="/products/:id" element={<Login/>} />
      <Login />
    </div>
  );
};

export default App;
