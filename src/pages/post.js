import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Head from 'next/head';
import { getPost } from '../api/calls';
import { message } from 'antd';
import { App } from '../App';
import Post from '../components/Post';

export class PostPage extends Component {
  static propTypes = {};
  state = { post: {} };
  render() {
    return (
      <App>
        <Fragment>
          <Head>{this.state.post.title}</Head>
          <Post post={this.state.post} author={this.props.user} />
        </Fragment>
      </App>
    );
  }

  componentDidMount() {
    console.log(this.props);
    getPost({ id: this.props.url.query.id })
      .then(({ data: post }) => {
        this.setState({ post });
      })
      .catch((error) => {
        message.error(error.message);
        Router.push({ pathname: '/' });
      });
  }
}

export default PostPage;
