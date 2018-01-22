import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Alert } from 'antd';
import renderIf from 'render-if';
import withRedux from 'next-redux-wrapper';
import App from '../App';
import { posts as getPosts } from '../api/calls';
import Posts from '../components/Posts';
import makeStore from '../store/index';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
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
  render() {
    return (
      <App>
        <Row>
          <Col span={20}>
            {renderIf(this.state.posts.length)(
              <Posts user={{}} posts={this.state.posts} />,
            )}
            {renderIf(!this.state.posts.length)(
              <Alert
                message="No Posts"
                description="Sorry, there are no posts."
                type="info"
                showIcon
              />,
            )}
          </Col>
        </Row>
      </App>
    );
  }
}
Home.propTypes = {
  user: PropTypes.object.isRequired,
};
const wrappedHome = withRedux(makeStore, (state) => ({
  user: state.user,
}))(Home);
export default wrappedHome;
