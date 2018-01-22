import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import Head from 'next/head';
import antCss from 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from '../components/Navbar';

const { Header, Content, Footer } = Layout;

const SimpleLayout = ({ children, user }) => (
  <Fragment>
    <style global jsx>
      {antCss}
    </style>
    <Head>
      <title> Simple Forum </title>
      <meta charSet="utf-8" />
    </Head>
    <Header className="header">
      <div className="logo" />
      <Navbar user={user} />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>{React.cloneElement(children, { user })}</Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Simple Forum made with (Node, Express, Next.js, React.js, AntDesign)</Footer>
  </Fragment>
);

SimpleLayout.propTypes = {
  children: propTypes.element.isRequired,
  user: propTypes.object.isRequired,
};
export default SimpleLayout;
