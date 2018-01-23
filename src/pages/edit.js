import React, { Component, Fragment } from 'react';
import autobind from 'auto-bind';
import { Row, Col, Spin, Card, message } from 'antd';
import Head from 'next/head';
import Router from 'next/router';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import App from '../App';
import AddPostForm from '../components/forms/AddPostForm';
import { getPost, updatePost } from '../api/calls';
import makeStore from '../store/index';

class EditPost extends Component {
  constructor() {
    super();
    autobind(this);
    this.state = {
      id: null,
      loading: false,
      editorState: {},
    };
  }

  componentDidMount() {
    this.enableLoading();
    getPost({ id: this.props.url.query.id })
      .then(({ data: editorState }) => {
        this.setState({ editorState });
        this.disableLoading();
      })
      .catch((error) => {
        message.error(error.message);
        Router.push({ pathname: '/' });
      });
  }

  onSubmit(validateFields) {
    return (event) => {
      event.preventDefault();
      this.enableLoading();
      validateFields((error, values) => {
        if (error) {
          message.error('Some problem occurred, please fix');
          return false;
        }
        const postId = this.state.editorState._id;
        return updatePost(postId, values)
          .then(() => {
            message.info('Your post has been updated.');
            Router.push(`/post?id=${postId}`, `/post/${postId}`);
          })
          .catch(() => {
            message.error('Unable to save post.');
          })
          .finally(() => {
            this.disableLoading();
          });
      });
    };
  }
  enableLoading() {
    this.setState({ loading: true });
  }

  disableLoading() {
    this.setState({ loading: false });
  }
  render() {
    return (
      <App>
        <Fragment>
          <Head>
            <title>Edit Post</title>
          </Head>
          <Row>
            <Col span={2} />
            <Col span={20}>
              <Card
                title="Edit Post"
                extra={
                  <Link as={`/post/${this.state.editorState._id}`} href={`/post?id=${this.state.editorState._id}`}>
                    <a>Go Back</a>
                  </Link>
                }
              >
                <Spin spinning={this.state.loading}>
                  <AddPostForm title={'Update'} editorState={this.state.editorState} onSubmit={this.onSubmit} />
                </Spin>
              </Card>
            </Col>
            <Col span={2} />
          </Row>
        </Fragment>
      </App>
    );
  }
}
const EditWrapped = withRedux(makeStore, state => ({
  user: state.user.profile,
}))(EditPost);
export default EditWrapped;
