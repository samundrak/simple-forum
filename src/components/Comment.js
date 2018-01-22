import React, { Fragment } from 'react';
import renderIf from 'render-if';
import PropTypes from 'prop-types';
import { Card, Popconfirm, Tag } from 'antd';
import autoBind from 'auto-bind';
import distanceInWords from 'date-fns/distance_in_words';
import CommentBox from '../components/CommentBox';

class Comment extends React.Component {
  constructor() {
    super();
    autoBind(this);
    this.state = {
      isEditMode: false,
    };
  }
  componentWillReceiveProps() {
    this.setState({ isEditMode: false });
  }
  handleEditMode() {
    this.setState({ isEditMode: !this.state.isEditMode });
  }
  render() {
    return (
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={'Commentor'}
        extra={
          <Fragment>
            <Tag>
              {distanceInWords(this.props.comment.created_at, new Date())} ago
            </Tag>
            {renderIf(this.props.user._id === this.props.comment.user_id)(
              <Fragment>
                <a onClick={this.handleEditMode} role="none">
                  Edit
                </a>{' '}
                <Popconfirm
                  title="Are you sure delete this comment?"
                  onConfirm={this.props.handleDelete(this.props.comment)}
                  okText="Yes"
                  cancelText="No"
                >
                  <a href="#">Delete</a>
                </Popconfirm>
              </Fragment>,
            )}
          </Fragment>
        }
      >
        {renderIf(!this.state.isEditMode)(this.props.comment.comment)}
        {renderIf(this.state.isEditMode)(
          <CommentBox
            onSubmit={this.props.handleEdit}
            comment={this.props.comment}
          />,
        )}
      </Card>
    );
  }
}
Comment.defaultProps = {
  user: {},
  handleEdit: () => null,
  handleDelete: () => null,
};
Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  user: PropTypes.object,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default Comment;
