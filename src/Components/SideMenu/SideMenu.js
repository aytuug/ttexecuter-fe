import { Menu } from 'antd';
import React from 'react';
import {
  BankOutlined,
  SolutionOutlined,
  UserOutlined,
  LaptopOutlined,
  FundProjectionScreenOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <div style={{ marginTop: '20px' }}>
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: 'Home',
            icon: <HomeOutlined />,
            key: '/',
          },
          {
            label: 'Add Faculty',
            icon: <BankOutlined />,
            key: '/faculty',
          },
          {
            label: 'Add Department',
            icon: <SolutionOutlined />,
            key: '/department',
          },
          {
            label: 'Add Instructor',
            icon: <UserOutlined />,
            key: '/instructor',
          },
          {
            label: 'Add Student',
            icon: <UserOutlined />,
            key: '/student',
          },
          {
            label: 'Add Classroom',
            icon: <LaptopOutlined />,
            key: '/classroom',
          },
          {
            label: 'Add Course',
            icon: <FundProjectionScreenOutlined />,
            key: '/course',
          },
        ]}
      ></Menu>
    </div>
  );
};

export default SideMenu;
