import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

// const makeStore = (initialState, options) =>
//   createStore(reducer, initialState, applyMiddleware(thunk));

const isProd = process.env.NODE_ENV === 'production';
const middleware = [];
const composed = [];
middleware.push(thunk);
if (!isProd) {
  middleware.push(reduxImmutableStateInvariant());
  const loggerMiddleware = createLogger({
    predicate: () => !isProd,
  });
  middleware.push(loggerMiddleware);
}

composed.push(applyMiddleware(...middleware));
if (!isProd) {
  if (typeof window !== 'undefined') {
    composed.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }
}
export default function configureStore(initialState) {
  const devCreateStore = compose(...composed)(createStore);

  return devCreateStore(combineReducers({ user: reducer }), initialState);
}
