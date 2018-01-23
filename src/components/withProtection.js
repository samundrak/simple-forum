import React from 'react';
import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import makeStore from '../store/index';

const withProtection = WrappedComponent =>
  withRedux(makeStore, state => ({
    user: state.user.profile,
  }))(
    class extends React.Component {
      static displayName = 'ProtectedPage';
      componentWillReceiveProps(nextProps) {
        if (!nextProps.user._id) {
          Router.push('/login');
        }
      }
      render() {
        return <WrappedComponent {...this.props} />;
      }
    },
  );
export default withProtection;
