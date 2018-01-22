import * as CONST from './const';

export function loginSuccess(user) {
  console.log('is me here');
  return {
    type: CONST.FETCH_USER_PROFILE_SUCCESS,
    user,
  };
}
