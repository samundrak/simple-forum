import React from 'react';
import { Spin, message, Alert } from 'antd';
import autoBind from 'auto-bind';
import PropTypes from 'prop-types';
import renderIf from 'render-if';
import {
  getComments,
  deleteComment,
  postNewComment,
  updateComment,
} from '../api/calls';
import Comments from '../components/Comments';
import CommentBox from '../components/CommentBox';

class CommentsContainers extends React.Component {
  constructor() {
    super();
    autoBind(this);
    this.state = {
      loading: false,
      comments: [],
    };
  }
  componentDidMount() {
    getComments(this.props.postId)
      .then(({ data }) => {
        this.setState({ comments: data, loading: false });
      })
      .catch(() => {
        this.setState({ comments: null, loading: false });
      });
  }
  handleCommentSubmit = (validateRules, setFieldsValue) => (event) => {
    event.preventDefault();
    validateRules((error, values) => {
      if (error) {
        return false;
      }
      return postNewComment(this.props.postId, values)
        .then(({ data }) => {
          const comments = [].concat(this.state.comments, [
            { ...data, user: this.props.user },
          ]);
          this.setState({ comments });
          setFieldsValue({ comment: null });
        })
        .catch((err) => {
          message.err(
            err.response ? err.response.data.message : 'Unknown error occured',
          );
        });
    });
  };
  updateLocalComment(commentId, { comment }) {
    const comments = [].concat(this.state.comments);
    const oldCommentIndex = comments.findIndex((c) => c._id === commentId); // eslint-disable-line
    if (oldCommentIndex < 0) return;
    comments[oldCommentIndex].comment = comment;
    this.setState({ comments });
  }
  handleCommentDelete(comment) {
    return () => {
      this.setState({ loading: true });
      return deleteComment(this.props.postId, comment._id)
        .then(() => {
          const comments = [].concat(this.state.comments);
          const commentIndex = comments.findIndex((c) => c._id === comment._id); // eslint-disable-line
          if (commentIndex < 0) return;
          comments.splice(commentIndex, 1);
          this.setState({ comments });
          message.info('One Comment delete successfully.');
        })
        .catch(() => {
          message.error('Unable to delete comment');
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    };
  }
  handleCommentUpdate = (validateRules, setFieldsValue, comment) => (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    validateRules((error, values) => {
      if (error) {
        return false;
      }

      return updateComment(this.props.postId, comment._id, values)
        .then(() => {
          this.updateLocalComment(comment._id, values);
          message.info('Comment updated successfully.');
        })
        .catch(() => {
          message.error('Unable to update comment.');
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    });
  };
  render() {
    return (
      <Spin spinning={this.state.loading}>
        <Comments
          user={this.props.user}
          handleCommentDelete={this.handleCommentDelete}
          handleCommentUpdate={this.handleCommentUpdate}
          comments={this.state.comments}
        />
        {renderIf(this.props.user._id)(
          <CommentBox onSubmit={this.handleCommentSubmit} />,
        )}
        {renderIf(!this.props.user._id)(
          <Alert
            message="Warning"
            description="Please login to comment."
            type="warning"
            showIcon
          />,
        )}
      </Spin>
    );
  }
}

CommentsContainers.propTypes = {
  user: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
};
export default CommentsContainers;
