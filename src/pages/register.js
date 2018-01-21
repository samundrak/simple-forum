import React, { Fragment } from 'react';
import { Row, Col, Card } from 'antd';
import Head from 'next/head';
import Layout from '../components/Layout';
import RegisterForm from '../components/forms/RegisterForm';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
      },
    };
  }
  handleSubmit(validateFields) {
    return (event) => {
      event.preventDefault();
      validateFields((err, values) => {
        console.log(err, values);
      });
      console.log(event);
    };
  }
  render() {
    return (
      <Layout>
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
      </Layout>
    );
  }
}

export default Register;
