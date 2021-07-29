import React, { useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import { routes } from "./router";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return <Router>{routes}</Router>;
}

export default App;
