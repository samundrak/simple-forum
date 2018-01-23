import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Popconfirm, Tag } from 'antd';
import Link from 'next/link';
import distanceInWords from 'date-fns/distance_in_words';

const Post = ({ post, user, handleDelete }) => (
  <Card
    style={{ marginTop: 16 }}
    type="inner"
    title={post.title}
    extra={
      <Fragment>
        <Tag>
          {distanceInWords(post.created_at, new Date())} ago by {post.user.first_name} {post.user.last_name}
        </Tag>
        {user._id !== post.user._id ? (
          <Link as={`/post/${post._id}`} href={`/post?id=${post._id}`}>
            <a>More</a>
          </Link>
        ) : (
          <Fragment>
            <Link as={`/post/edit/${post._id}`} href={`/edit?id=${post._id}`}>
              <a>Edit</a>
            </Link>{' '}
            <Popconfirm title="Are you sure delete this post?" onConfirm={handleDelete(post)} okText="Yes" cancelText="No">
              <a href="#">Delete</a>
            </Popconfirm>
          </Fragment>
        )}
      </Fragment>
    }
  >
    {post.description}
  </Card>
);

Post.defaultProps = {
  user: {},
  handleEdit: () => null,
  handleDelete: () => null,
};
Post.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default Post;
