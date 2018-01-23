import * as CONST from './const';

export function profileSuccess(user) {
  return {
    type: CONST.FETCH_USER_PROFILE_SUCCESS,
    user,
  };
}
export function profileFailed() {
  return {
    type: CONST.FETCH_USER_PROFILE_FAILED,
  };
}
