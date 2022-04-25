import "./App.css";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import Login from "./pages/login";

function App() {
  // axios.get("https://kenziehub.herokuapp.com").then((response) => {
  //   console.log(response);
  // });

  return (
    <div className="App">
      <GlobalStyle/>
      <Routes/>
      <Login/>
      <h1>Ronaldo</h1>
    </div>
  );
}

export default App;
