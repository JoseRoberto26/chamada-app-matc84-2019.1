import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../Components/Login/login'
import Disciplinas from '../Components/Disciplinas/disciplinas'
import Cadastro from '../Components/Cadastro/cadastro'
import Home from "../Components/Home/home";

const Root = () => (
  <Router>
    <Route path="/" component={Login} exact/>
    <Route path="/disciplinas" component={Disciplinas} />
    <Route path="/cadastro" component={Cadastro} />
    <Route path="/home" component={Home} />
  </Router>
);

export default Root;