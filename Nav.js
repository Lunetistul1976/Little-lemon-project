// Nav.js
import React from 'react';
import './Navbar.css';
import Logo from './Logo.svg';

const Nav = () => {
    const handleClick = (e,anchor) => {
        e.preventDefault()
        const id = `${anchor}`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            duration: 2000,
          });
        }
      };
return (
<nav className='app__navbar'>
    <div className='app__logo'><img src={Logo} alt="Little Lemon logo" /></div>
<ul className='app__navbar-links'>
<li className='p__opensans'><a href="/#home" onClick={ (e) =>handleClick(e,'home')}>Home</a></li>
<li className='p__opensans'><a href="/#about" onClick={ (e) =>handleClick(e,'about')}>About </a></li>
<li className='p__opensans'><a href="/#order" onClick={(e) =>handleClick(e,'order')}>Menu</a></li>
<li className='p__opensans'><a href="/#reservations" onClick={(e) =>handleClick(e,'reservations')}>Reservations</a></li>
<li className='p__opensans'><a href="/#order" onClick={(e) =>handleClick(e,'order')}>Order online</a></li>
<li className='p__opensans'><a href="/#login" onClick={(e) =>handleClick(e,'login')}>Login</a></li>
</ul>
</nav>
);
}

export default Nav;
