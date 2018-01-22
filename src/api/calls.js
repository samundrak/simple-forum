import template from 'lodash.template';
import * as API from './index';
import HttpClient from '../core/HttpClient';

const httpClient = HttpClient.auth();
const openHttpClient = HttpClient.api();

export function login(payload) {
  return openHttpClient.post(API.LOGIN, payload);
}
export function register(payload) {
  return openHttpClient.post(API.REGISTER, payload);
}
export function profile() {
  return httpClient.get(API.PROFILE);
}

// Api for posts
export function posts() {
  return openHttpClient.get(API.POSTS);
}
export function postNewPost(post) {
  return httpClient.post(API.POSTS, post);
}
export function getPost(query) {
  return openHttpClient.get(template(API.POST)(query));
}
export function updatePost(id, payload) {
  return httpClient.patch(template(API.POST)({ id }), payload);
}
export function deletePost(id) {
  return httpClient.delete(template(API.POST)({ id }));
}

// Api for comments
export function getComments(postId) {
  return openHttpClient.get(template(API.COMMENTS)({ postId }));
}
export function postNewComment(postId, comment) {
  return httpClient.post(template(API.COMMENTS)({ postId }), comment);
}
export function updateComment(postId, id, payload) {
  return httpClient.patch(template(API.COMMENT)({ postId, id }), payload);
}
export function deleteComment(postId, id) {
  return httpClient.delete(template(API.COMMENT)({ postId, id }));
}
