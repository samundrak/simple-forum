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
    this.state = {};
  }

  componentDidMount() {
    if (Object.keys(this.props.user).length) return;
    profile()
      .then(({ data }) => {
        this.props.actions.profileSuccess(data);
      })
      .catch(() => {
        this.props.actions.profileFailed();
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
      <Layout user={this.props.user} handleMenuClick={this.handleMenuClick}>
        {React.cloneElement(this.props.children, { user: this.props.user })}
      </Layout>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  actions: PropTypes.object.isRequired,
};
const mapActionToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

const wrappedApp = connect(
  state => ({
    user: state.user.profile,
  }),
  mapActionToProps,
)(App);
export default wrappedApp;
