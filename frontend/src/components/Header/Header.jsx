import React from 'react';
import './Header.css';

const Header = ({ scrollToProducts }) => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>WELLCOME TO EVOLEXX</h2>
        <p></p>
        <button onClick={scrollToProducts}>View Shop</button> {/* Button to scroll */}
      </div>
    </div>
  );
};

export default Header;