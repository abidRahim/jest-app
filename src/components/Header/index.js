import React from 'react';
import './styles.scss';

const Header = () => {
  return (
    <header data-test="header">
      <div className="wrap">
        <div className="logo" data-test="logo">
          Logo
        </div>
      </div>
    </header>
  )
}

export default Header;
