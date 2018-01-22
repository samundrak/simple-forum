import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const makeStore = (initialState, options) =>
  createStore(reducer, initialState, applyMiddleware(thunk));

export default makeStore;
