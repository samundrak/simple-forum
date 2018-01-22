import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import Link from 'next/link';

const Post = ({ post }) => (
  <Card
    style={{ marginTop: 16 }}
    type="inner"
    title={post.title}
    extra={
      <Link as={`/post/${post._id}`} href={`/post?id=${post._id}`}>
        <a>More</a>
      </Link>
    }
  >
    {post.description}
  </Card>
);

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
