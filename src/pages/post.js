import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'auto-bind';
import Router from 'next/router';
import Head from 'next/head';
import renderIf from 'render-if';
import { message, Spin, Alert } from 'antd';
import withRedux from 'next-redux-wrapper';
import makeStore from '../store/index';
import { getPost, deletePost } from '../api/calls';
import App from '../App';
import Post from '../components/Post';
import CommentsContainer from '../components/CommentsContainer';

class PostPage extends Component {
  static propTypes = {};

  constructor() {
    super();
    autoBind(this);
    this.state = { post: { user: {} }, loading: false, comments: [] };
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.setState({ loading: true });
    getPost({ id: this.props.url.query.id })
      .then(({ data: post }) => {
        this.setState({ post, loading: false });
      })
      .catch((error) => {
        message.error(error.message);
        Router.push({ pathname: '/' });
      });
  }
  handleEdit(post) {
    return (event) => {
      event.preventDefault();
      Router.push(`/edit?id=${post._id}`, `/post/edit/${post._id}`);
    };
  }

  handleDelete = post => (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    deletePost(post._id)
      .then(() => {
        Router.push('/');
      })
      .catch(() => {
        message.error('unable to delete post.');
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <App>
        <Spin spinning={this.state.loading}>
          <Head>{this.state.post.title}</Head>
          <Post handleDelete={this.handleDelete} handleEdit={this.handleEdit} post={this.state.post} user={this.props.user} />
          {renderIf(this.props.user._id)(<CommentsContainer user={this.props.user} postId={this.props.url.query.id} />)}
          <br />
          {renderIf(!this.props.user._id)(<Alert message="Warning" description="Please login to comment." type="warning" showIcon />)}
        </Spin>
      </App>
    );
  }
}

PostPage.propTypes = {
  user: PropTypes.object.isRequired,
  url: PropTypes.object.isRequired,
};
const wrapped = withRedux(makeStore, state => ({
  user: state.user.profile,
}))(PostPage);
export default wrapped;
