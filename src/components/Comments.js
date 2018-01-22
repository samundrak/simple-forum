import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import Comment from './Comment';

const Comments = ({
  user,
  comments,
  handleCommentUpdate,
  handleCommentDelete,
}) => (
  <Card title={`${comments.length} Comment(s)`} bordered={false}>
    {comments.map((comment) => (
      <Comment
        user={user}
        handleDelete={handleCommentDelete}
        handleEdit={handleCommentUpdate}
        key={comment._id}
        comment={comment}
      />
    ))}
  </Card>
);

Comments.propTypes = {
  user: PropTypes.object.isRequired,
  handleCommentDelete: PropTypes.func.isRequired,
  handleCommentUpdate: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
};
export default Comments;
