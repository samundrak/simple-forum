import React, { Component, Fragment } from 'react';
import renderIf from 'render-if';
import { Row, Col, Card, message } from 'antd';
import Head from 'next/head';
import App from '../App';
import AddPostForm from '../components/forms/AddPostForm';
import { postNewPost } from '../api/calls';

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      shouldMountEditor: false,
    };
  }
  onEditorChange = editorState => this.setState({ editorState });
  componentDidMount() {
    this.setState({
      shouldMountEditor: true,
      editorState: '',
    });
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
          })
          .catch((error) => {
            message.error(error.response.data.message);
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
                {renderIf(this.state.shouldMountEditor)(
                  <AddPostForm editorState={this.state.editorState} onEditorChange={this.onEditorChange} onSubmit={this.onSubmit.bind(this)} />,
                )}
              </Card>
            </Col>
            <Col span={2} />
          </Row>
        </Fragment>
      </App>
    );
  }
}

export default AddPost;
