import React from 'react';
import Post from './Post';
import { Card } from 'antd';

const Posts = ({ posts }) => <Card title="New Posts">{posts.map(post => <Post key={post._id} post={post} />)}</Card>;

export default Posts;
