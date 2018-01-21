import React, { Component, Fragment } from 'react';
import { Row, Col, Card } from 'antd';
import Head from 'next/head';
import Layout from '../components/Layout';
import LoginForm from '../components/forms/LoginForm';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: '',
        password: '',
      },
    };
  }
  render() {
    return (
      <Layout>
        <Fragment>
          <Head>
            <title>Login</title>
          </Head>
          <Row>
            <Col span={8} />
            <Col span={8}>
              <Card title="Login" style={{ width: 300 }}>
                <LoginForm />
              </Card>
            </Col>
            <Col span={8} />
          </Row>
        </Fragment>
      </Layout>
    );
  }
}

export default Login;
