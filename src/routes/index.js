import { Switch, Route } from "react-router-dom";
import React from "react";
import Login from "../pages/login/";

const Routes = () => {
  <Switch>
    <Route exatch path={"/Cadastro"}></Route>
    <Route exatch path={"/"}>
      <Login />
    </Route>
    <Route exatch path={"/Index"}></Route>
  </Switch>;
};

export default Routes;
