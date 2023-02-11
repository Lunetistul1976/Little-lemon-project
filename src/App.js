import React, { lazy, Suspense } from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import OrderOnline from './Components/OrderOnline';
import Footer from './Components/Footer'
import Login from './Components/Login';
import Reservations from './Components/Reservations';

const About = lazy(() => import('./Components/About'));

function App() {
  return (
    <div className="grid-container">
      < Nav />
      <Header />
      <OrderOnline /> 
      <Reservations />
      <Login />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
