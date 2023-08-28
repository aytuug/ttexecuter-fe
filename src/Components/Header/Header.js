import React from 'react';
import './Header.css';
import { Image } from 'antd';
import logo from '../../assets/ttexecuter.png';

const Header = () => {
  return (
    <div className="header">
      <Image width={122} src={logo} />
    </div>
  );
};

export default Header;
