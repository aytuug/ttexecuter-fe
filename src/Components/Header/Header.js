import React from 'react';
import './Header.css';
import { MailOutlined } from '@ant-design/icons';
import { Image, Space } from 'antd';
const Header = () => {
  return (
    <div className="header">
      <Image
        width={40}
        src="https://avatars.githubusercontent.com/u/75138903?v=4"
      />
      <Space>
        <MailOutlined style={{ fontSize: 24 }} />
      </Space>
    </div>
  );
};

export default Header;
