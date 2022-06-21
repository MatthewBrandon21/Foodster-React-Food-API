import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        -People who love to eat are always the best people-
        </p>
        <p className='footer-subscription-text'>
        Julia Child.
        </p>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Foodster.
              <i class='fas fa-utensils' />
            </Link>
          </div>
          <small class='website-rights'>FOODSTER © 2020</small>
          <h1 class='footer-powered'>Powered by Edamam API</h1>
        </div>
      </section>
    </div>
  );
}

export default Footer;
