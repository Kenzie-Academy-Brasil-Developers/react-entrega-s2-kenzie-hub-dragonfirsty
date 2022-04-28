import { Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Login from "../pages/login/";
import Cadastro from "../pages/cadastro";
import Dashboard from "../pages/dashboard";
import { useState } from "react";

const Routes = () => {
  const [authenticated,setAuthenticated] = useState(false);
  
  const token = JSON.parse(localStorage.getItem("authToken"));
  const userId = JSON.parse(localStorage.getItem("userId")); 
  

  useEffect(() => {
    
    if (token) {
      setAuthenticated(true);
    }

  }, [authenticated]);

  return (
    <Switch>
      <Route exatch path={"/Cadastro"}>
        <Cadastro authenticated={authenticated} />
      </Route>
      <Route exatch path={"/Dashboard"}>
        <Dashboard authenticated={authenticated} userId={userId} token={token}/>
      </Route>
      <Route exatch path={"/"}>
        <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>
    </Switch>
  );
};

export default Routes;
