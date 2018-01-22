import React, { Fragment } from 'react';
import renderIf from 'render-if';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import Link from 'next/link';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Navbar = ({ user }) => (
  <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
    <Menu.Item key="1">
      <Link href="/">
        <a>Home</a>
      </Link>
    </Menu.Item>
    {renderIf(!user.email)(
      <Menu.Item key="2">
        <Link href="/login">
          <a>Login</a>
        </Link>
      </Menu.Item>,
    )}
    {renderIf(!user.email)(
      <Menu.Item key="3">
        <Link href="/register">
          <a>Register</a>
        </Link>
      </Menu.Item>,
    )}
    {renderIf(user.email)(
      <Menu.Item key="3">
        <Link href="/add-post">
          <a>+ Add Post</a>
        </Link>
      </Menu.Item>,
    )}
    {renderIf(user.email)(
      <SubMenu
        title={
          <span>
            <Icon type="setting" />
            {user.first_name} {user.last_name}
          </span>
        }
      >
        <MenuItemGroup title="Options">
          <Menu.Item key="setting:1">Logout</Menu.Item>
        </MenuItemGroup>
      </SubMenu>,
    )}
  </Menu>
);
Navbar.propTypes = {
  user: PropTypes.object.isRequired,
};
export default Navbar;
