/* global window */
export function getToken() {
  if (typeof window !== 'undefined') {
    if (!window.localStorage) {
      return false;
    }

    return window.localStorage.getItem('token');
  }
}
export function setToken(token) {
  if (typeof window !== 'undefined') {
    if (!window.localStorage) {
      return false;
    }

    return window.localStorage.setItem('token', token);
  }
}
