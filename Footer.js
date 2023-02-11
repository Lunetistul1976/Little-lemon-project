// Footer.js
import React from 'react';
import './Footer.css';
import Logo from './Logo.svg';
const Footer = () => {
  return (
    <footer className='app__footer'>
      <img src={Logo} alt="Little Lemon logo"/>
    <article className='app__footer-dormat navigation'>Doormat navigation
    <ul>
    <li><a href="/home">Home</a></li>        
    <li><a href="/about">About </a></li>
    <li><a href="/menu">Menu</a></li> 
    <li><a href="/reservations">Reservations</a></li>        
    <li><a href="/order">Order online</a></li>
    <li><a href="/login">Login</a></li> 
    </ul>
    </article>

     <article className='app__footer-contact'>Contact
    <ul >
    <li><a href="/contact.me">Adress</a></li>
    <li><a href="/contact.me">Email</a></li>
    <li><a href="/contact.me">Phone number</a></li>          
    </ul>
    </article>
    
    <article className='app__footer-social-media'>Social media links
    <ul className="socialmedia">
        <li><a href="/socialmedia.me">Adress</a></li>
        <li><a href="/contact.me">Email</a></li>
        <li><a href="/contact.me">Phone number</a></li>
    </ul>
    </article>
    </footer>
  );
}

export default Footer;
