import * as CONST from './const';

const initialState = {
  user: null,
  posts: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONST.FETCH_USER_PROFILE_SUCCESS:
      return { ...state, user: action.user };
    default:
      return state;
  }
};
export default reducer;
