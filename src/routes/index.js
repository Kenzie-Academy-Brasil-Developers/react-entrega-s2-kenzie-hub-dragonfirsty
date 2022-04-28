import { Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Login from "../pages/login/";
import Cadastro from "../pages/cadastro";
import Dashboard from "../pages/dashboard";
import { useState } from "react";

const Routes = () => {
  const [authenticated,setAuthenticated] = useState(false);
  


  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("authToken"));
    
    if (token) {
      return setAuthenticated(true);
    }
  }, []);

  return (
    <Switch>
      <Route exatch path={"/Cadastro"}>
        <Cadastro authenticated={authenticated} />
      </Route>
      <Route exatch path={"/Dashboard"}>
        <Dashboard authenticated={authenticated} />
      </Route>
      <Route exatch path={"/"}>
        <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>
    </Switch>
  );
};

export default Routes;
