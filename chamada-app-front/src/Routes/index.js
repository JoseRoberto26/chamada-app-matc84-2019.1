import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../Components/Login/login'
import Disciplinas from '../Components/Disciplinas/disciplinas'
import Cadastro from '../Components/Cadastro/cadastro'

const Root = () => (
  <Router>
    <Route path="/" component={Login} exact/>
    <Route path="/disciplinas" component={Disciplinas} />
    <Route path="/cadastro" component={Cadastro} />
  </Router>
);

export default Root;