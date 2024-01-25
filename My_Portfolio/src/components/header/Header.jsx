import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Xandra Josh</h1>
        <h5 className="text-light">Full-Stack Cutie</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          i-scroll mo
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
