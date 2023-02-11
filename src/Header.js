// Header.js
import React from 'react';
import './Header.css'
import restaurantfood from './restauranfood.jpg';
const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id='home'>
      <div className='app__wrapper__info'>
      <h1 className='app__header-h1'>Little Lemon</h1>
      <h2 className='app__header-h2'>Chicago</h2>
      <p className='p__opensas'>We are a family owned Mediterranean<br/> restaurant, focused on traditional recipes<br/> served with a modern twist.</p>
      <button className='app__header-button'>Reserve a Table</button>
      </div>
      <div className='app__wrapper__img'>
      <img src={restaurantfood} alt="The home icon"/>
      </div>
    </div>
  );
}

export default Header;
