import React, { Component, Fragment } from 'react';
import { Row, Col, Card, message } from 'antd';
import autoBind from 'auto-bind';
import Router from 'next/router';
import Head from 'next/head';
import App from '../App';
import AddPostForm from '../components/forms/AddPostForm';
import { postNewPost } from '../api/calls';
import withProtection from '../components/withProtection';

class AddPost extends Component {
  constructor() {
    super();
    autoBind(this);
    this.state = {
      editorState: {},
    };
  }
  onSubmit(validateFields) {
    return (event) => {
      event.preventDefault();
      validateFields((error, values) => {
        if (error) {
          message.error('Some problem occurred, please fix');
          return false;
        }
        postNewPost(values)
          .then(() => {
            message.info('New Post has been added.');
            Router.push('/');
          })
          .catch((err) => {
            message.error(err.response.data.message);
          });
      });
    };
  }
  render() {
    return (
      <App>
        <Fragment>
          <Head>
            <title>Add Post</title>
          </Head>
          <Row>
            <Col span={2} />
            <Col span={20}>
              <Card title="Add New Post">
                <AddPostForm title={'Add'} editorState={this.state.editorState} onEditorChange={this.onEditorChange} onSubmit={this.onSubmit} />
              </Card>
            </Col>
            <Col span={2} />
          </Row>
        </Fragment>
      </App>
    );
  }
}

export default withProtection(AddPost);
