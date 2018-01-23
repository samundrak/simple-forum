import React, { Component, Fragment } from 'react';
import { Row, Col, Card, message } from 'antd';
import Head from 'next/head';
import Router from 'next/router';
import withRedux from 'next-redux-wrapper';
import { setToken } from '../core/helpers';
import App from '../App';
import LoginForm from '../components/forms/LoginForm';
import { login } from '../api/calls';
import makeStore from '../store/index';

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
  componentWillReceiveProps(nextProps) {
    if (nextProps.user._id) {
      Router.push('/');
    }
  }
  handleSubmit(validateFields) {
    return (event) => {
      event.preventDefault();
      validateFields((error, values) => {
        if (error) {
          return false;
        }
        const { email, password } = values;
        login({ email, password })
          .then(({ data }) => {
            Router.push({
              pathname: '/',
            });
            setToken(data.token);
            window.location.reload();
          })
          .catch((error) => {
            message.error(error.response ? error.response.data.message : error.message);
          });
      });
    };
  }
  render() {
    return (
      <App>
        <Fragment>
          <Head>
            <title>Login</title>
          </Head>
          <Row>
            <Col span={8} />
            <Col span={8}>
              <Card title="Login" style={{ width: 300 }}>
                <LoginForm onSubmit={this.handleSubmit} />
              </Card>
            </Col>
            <Col span={8} />
          </Row>
        </Fragment>
      </App>
    );
  }
}

const LoginWrapped = withRedux(makeStore, state => ({
  user: state.user.profile,
}))(Login);
export default LoginWrapped;
