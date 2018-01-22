import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

const LoginForm = ({
  onSubmit,
  form: { getFieldDecorator, validateFields },
}) => (
  <Form className="register-form" onSubmit={onSubmit(validateFields)}>
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
        Login
      </Button>
      <br />
      <Link href="/register">
        <a>No Account?, Register Now!</a>
      </Link>
    </FormItem>
  </Form>
);

LoginForm.propTypes = {
  form: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
const WrappedLoginForm = Form.create()(LoginForm);
export default WrappedLoginForm;
