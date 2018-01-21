import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

const RegisterForm = ({
  onSubmit,
  form: { getFieldDecorator, validateFields },
}) => (
  <Form className="register-form" onSubmit={onSubmit(validateFields)}>
    <FormItem>
      {getFieldDecorator('first_name', {
        rules: [{ required: true, message: 'Please input your firstname!' }],
      })(<Input placeholder="First Name" />)}
    </FormItem>
    <FormItem>
      {getFieldDecorator('last_name', {
        rules: [{ required: true, message: 'Please input your lastname!' }],
      })(<Input placeholder="Last Name" />)}
    </FormItem>
    <FormItem>
      {getFieldDecorator('email', {
        rules: [{ required: true, message: 'Please input your email!' }],
      })(<Input placeholder="email" />)}
    </FormItem>
    <FormItem>
      {getFieldDecorator('password', {
        rules: [{ required: true, message: 'Please input your Password!' }],
      })(
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />,
      )}
    </FormItem>
    <FormItem>
      <Button type="primary" htmlType="submit" className="register-form-button">
        Register
      </Button>
      <br />
      <Link href="/login">
        <a>Have Account, Login Now!</a>
      </Link>
    </FormItem>
  </Form>
);

RegisterForm.propTypes = {
  form: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
const WrappedRegisterForm = Form.create()(RegisterForm);
export default WrappedRegisterForm;
