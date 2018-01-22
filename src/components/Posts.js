import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import Post from './Post';

const Posts = ({ posts, user }) => (
  <Card title="Posts">
    {posts.map((post) => <Post user={user} key={post._id} post={post} />)}
  </Card>
);

Posts.propTypes = {
  user: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
};
export default Posts;
