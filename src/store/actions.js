import * as CONST from './const';

export function loginSuccess(user) {
  return {
    type: CONST.FETCH_USER_PROFILE_SUCCESS,
    user,
  };
}
