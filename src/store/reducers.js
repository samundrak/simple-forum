import * as CONST from './const';

const initialState = {
  profile: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONST.FETCH_USER_PROFILE_SUCCESS:
      return { ...state, profile: action.user };
    case CONST.FETCH_USER_PROFILE_FAILED:
      return { ...state, profile: {} };
    default:
      return state;
  }
};
export default reducer;
