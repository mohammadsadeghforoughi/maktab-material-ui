import React from "react";
import Router, { Switch, Route } from "react-router-dom";
import CrudRoute from "../pages/crud";
import MaktabRoute from "../pages/MaktabRoute";
import HomeRoute from "../pages/Home";
import UsersRoute from "../pages/Users";
import UserDetailRoute from "../pages/UserDetail";

export const routes = (
  <>
    <Switch>
      <Route path="/crud" component={CrudRoute}></Route>
      <Route path="/users/:id" component={UserDetailRoute}></Route>
      <Route path="/users" component={UsersRoute}></Route>
      <Route path="/maktab" component={MaktabRoute}></Route>
      <Route path="/" component={HomeRoute}></Route>
    </Switch>
  </>
);
