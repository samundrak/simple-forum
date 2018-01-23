import React, { Fragment } from 'react';
import { Row, Col, Card, message } from 'antd';
import Head from 'next/head';
import Router from 'next/router';
import withRedux from 'next-redux-wrapper';
import { setToken } from '../core/helpers';
import App from '../App';
import RegisterForm from '../components/forms/RegisterForm';
import { register, login } from '../api/calls';
import makeStore from '../store/index';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {},
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
      validateFields((err, values) => {
        if (err) {
          return false;
        }

        return register(values)
          .then(() => {
            message.success('You have been register successfully.');
            setTimeout(() => {
              const { email, password } = values;
              login({ email, password })
                .then(({ data }) => {
                  setToken(data.token);
                  window.location.href = '/';
                })
                .catch((error) => {
                  message.error(error.response ? error.response.data.message : error.message);
                });
            }, 2000);
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
            <title>Register</title>
          </Head>
          <Row>
            <Col span={8} />
            <Col span={8}>
              <Card title="Register" style={{ width: 300 }}>
                <RegisterForm onSubmit={this.handleSubmit} />
              </Card>
            </Col>
            <Col span={8} />
          </Row>
        </Fragment>
      </App>
    );
  }
}

const RegisterWrapped = withRedux(makeStore, state => ({
  user: state.user,
}))(Register);
export default RegisterWrapped;
