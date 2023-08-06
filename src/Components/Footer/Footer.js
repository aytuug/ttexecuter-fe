import React from 'react';
import './Footer.css';
import { Typography } from 'antd';
const Footer = () => {
  return (
    <div className="footer">
      <Typography.Link href="https://aytugakin.dev/" target={'_blank'}>
        https://aytugakin.dev/
      </Typography.Link>
      <Typography.Link href="https://github.com/aytuug" target={'_blank'}>
        https://github.com/aytuug
      </Typography.Link>
    </div>
  );
};

export default Footer;
