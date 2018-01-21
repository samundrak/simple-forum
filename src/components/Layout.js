import React from 'react';
import propTypes from 'prop-types';
import Head from 'next/head';
import antCss from 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from '../components/Navbar';

const { Header, Content, Footer } = Layout;

const SimpleLayout = ({ children }) => (
  <div>
    <style global jsx>
      {antCss}
    </style>
    <Head>
      <title> Simple Forum </title>
    </Head>
    <Header className="header">
      <div className="logo" />
      <Navbar />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          {children}
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Simple Forum made with (Node, Express, Next.js, React.js, AntDesign)
    </Footer>
  </div>
);

SimpleLayout.propTypes = {
  children: propTypes.element.isRequired,
};
export default SimpleLayout;
