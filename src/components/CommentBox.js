import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

const CommentBox = ({
  comment,
  form: { getFieldDecorator, validateFields, setFieldsValue },
  onSubmit,
}) => (
  <Form
    className="comment-form"
    onSubmit={onSubmit(validateFields, setFieldsValue, comment)}
  >
    <FormItem>
      {getFieldDecorator('comment', {
        initialValue: comment.comment,
        rules: [{ required: true, message: 'Please input your view!' }],
      })(<Input.TextArea rows={4} />)}
    </FormItem>
    <FormItem>
      <Button type="primary" htmlType="submit" className="comment-form-button">
        {comment.comment ? 'Update' : 'Comment'}
      </Button>
      <br />
    </FormItem>
  </Form>
);
CommentBox.defaultProps = {
  comment: {
    comment: null,
  },
};
CommentBox.propTypes = {
  comment: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
};
const WrappedCommentBox = Form.create()(CommentBox);
export default WrappedCommentBox;
