/* global window */
export function getToken() {
  if (typeof window !== 'undefined') {
    if (!window.localStorage) {
      return false;
    }

    return window.localStorage.getItem('token');
  }
  return null;
}
export function setToken(token) {
  if (typeof window !== 'undefined') {
    if (!window.localStorage) {
      return false;
    }

    return window.localStorage.setItem('token', token);
  }
  return null;
}

export function shouldLimitString(string = '', limit = 100) {
  return (string || '').length > limit;
}
export function limitString(string = '', limit = 100) {
  if (shouldLimitString(string, limit)) {
    return `${(string || '').substring(0, limit)}...(Read More)`;
  }
  return string;
}
