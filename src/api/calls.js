import * as API from './index';
import HttpClient from '../core/HttpClient';
import template from 'lodash.template';

const httpClient = HttpClient.auth();
const openHttpClient = HttpClient.api();

export function login(payload) {
  return openHttpClient.post(API.LOGIN, payload);
}
export function register(payload) {
  return openHttpClient.post(API.REGISTER, payload);
}
export function posts() {
  return openHttpClient.get(API.POSTS);
}
export function postNewPost(post) {
  return httpClient.post(API.POSTS, post);
}
export function profile() {
  return httpClient.get(API.PROFILE);
}
export function getPost(query) {
  return openHttpClient.get(template(API.POST_SHOW)(query));
}
