import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from './components/Layout';
import { profile } from './api/calls';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  render() {
    return <Layout user={this.state.user}>{this.props.children}</Layout>;
  }

  componentDidMount() {
    profile()
      .then(({ data }) => {
        this.setState({ user: data });
      })
      .catch((error) => {
        this.setState({ user: {} });
      });
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
