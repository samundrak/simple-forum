import React from 'react';
import App from '../App';
import { posts as getPosts } from '../api/calls';
import Posts from '../components/Posts';
import { Row, Col } from 'antd';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  render() {
    return (
      <App>
        <Row>
          <Col span={20}>
            <Posts posts={this.state.posts} />
          </Col>
        </Row>
      </App>
    );
  }
  componentDidMount() {
    getPosts()
      .then(({ data }) => {
        this.setState({ posts: data });
      })
      .catch(() => {
        this.setState({ posts: [] });
      });
  }
}

export default Home;
