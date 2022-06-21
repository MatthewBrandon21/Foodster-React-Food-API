import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className="navbar">
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Foodster.
            <i class='fas fa-utensils' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/category' className='nav-links' onClick={closeMobileMenu}>
                Find Food per Category
              </Link>
            </li>
            <li>
              <Link to='/aboutus' className='nav-links-mobile' onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
          </ul>
          <Link to='/aboutus' className='btn-mobile'>
            {button && <Button buttonStyle='btn--outline'>About Us</Button>}
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
