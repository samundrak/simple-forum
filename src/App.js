import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import * as actions from './store/actions';
import Layout from './components/Layout';
import { profile } from './api/calls';
import { setToken } from './core/helpers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    profile()
      .then(({ data }) => {
        this.setState({ user: data });
        this.props.actions.loginSuccess(data);
      })
      .catch(() => {
        this.setState({ user: {} });
      });
  }
  handleMenuClick(arg) {
    switch (arg.key) {
      case 'setting:1':
        setToken(null);
        window.location.reload();
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <Layout user={this.state.user} handleMenuClick={this.handleMenuClick}>
        {React.cloneElement(this.props.children, { user: this.state.user })}
      </Layout>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  actions: PropTypes.object.isRequired,
};
const mapActionToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

const wrappedApp = connect(
  (state) => ({
    user: state.user,
  }),
  mapActionToProps,
)(App);
export default wrappedApp;
