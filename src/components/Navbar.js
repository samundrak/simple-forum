import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

const Navbar = () => (
  <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
    <Menu.Item key="1">
      <Link href="/">
        <a>Home</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link href="/login">
        <a>Login</a>
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link href="/register">
        <a>Register</a>
      </Link>
    </Menu.Item>
  </Menu>
);
export default Navbar;
