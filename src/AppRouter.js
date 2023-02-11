import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Header';
import About from './About';
import Menu from './OrderOnline';
import Reservations from './Reservations';
import Order from './OrderOnline';
import Login from './Login';

const AppRouter = () => {
  return(
  <Router>
    <Nav />
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/menu" component={Menu} />
    <Route exact path="/reservations" component={Reservations} />
    <Route exact path="/order" component={Order} />
    <Route exact path="/login" component={Login} />
  </Router>
);
};

export default AppRouter;
