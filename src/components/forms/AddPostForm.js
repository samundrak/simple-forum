import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

const AddPostForm = ({ editorState, onEditorChange, onSubmit, form: { getFieldDecorator, validateFields } }) => (
  <Form className="register-form" onSubmit={onSubmit(validateFields)}>
    <FormItem>
      Title
      {getFieldDecorator('title', {
        rules: [{ required: true, message: 'Please input your title!' }],
      })(<Input placeholder="Title" />)}
    </FormItem>
    <FormItem>
      Description
      {getFieldDecorator('description', {
        rules: [{ required: true, message: 'Please add post details!' }],
      })(<Input.TextArea rows={4} />)}
    </FormItem>
    <FormItem>
      <Button type="primary" htmlType="submit" className="register-form-button">
        Create
      </Button>
    </FormItem>
  </Form>
);

AddPostForm.propTypes = {
  form: PropTypes.object.isRequired,
};
const WrappedLoginForm = Form.create()(AddPostForm);
export default WrappedLoginForm;
