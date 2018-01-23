import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

const AddPostForm = ({ title, editorState, onSubmit, form: { getFieldDecorator, validateFields } }) => (
  <Form className="register-form" onSubmit={onSubmit(validateFields)}>
    <FormItem>
      Title
      {getFieldDecorator('title', {
        initialValue: editorState.title,
        rules: [{ required: true, message: 'Please input your title!' }],
      })(<Input placeholder="Title" />)}
    </FormItem>
    <FormItem>
      Description
      {getFieldDecorator('description', {
        initialValue: editorState.description,
        rules: [{ required: true, message: 'Please add post details!' }],
      })(<Input.TextArea rows={4} />)}
    </FormItem>
    <FormItem>
      <Button type="primary" htmlType="submit" className="register-form-button">
        {title}
      </Button>
    </FormItem>
  </Form>
);

AddPostForm.defaultProps = {
  editorState: {},
  title: 'Add',
};
AddPostForm.propTypes = {
  title: PropTypes.string,
  editorState: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
};
const WrappedLoginForm = Form.create()(AddPostForm);
export default WrappedLoginForm;
