const api = require('express').Router();
const user = require('../../../controllers/UserController');
const auth = require('../../../controllers/AuthController');
const post = require('../../../controllers/PostController');
const comment = require('../../../controllers/CommentController');
const requestValidator = require("../../../middlewares/requestValidator");
const postExist = require("../../../middlewares/postExist");
const postSchema = require("../../../rules/request/PostSchema");
const commentSchema = require("../../../rules/request/CommentSchema");

api.get('/profile', auth.me);

/* User api routes */
api.get('/users', user.index);
api.get('/users/:id', user.show);
api.patch('/users/:id', user.update);

/* Routes for Post resource */

api.get('/posts', post.index);
api.post('/posts', requestValidator(postSchema), post.create);
api.get('/posts/:id', post.show);
api.patch('/posts/:id', requestValidator(postSchema), post.update);
api.delete('/posts/:id', post.destroy);

/* Routes for comments resource */
api.get('/posts/:postId/comments', comment.index);
api.post('/posts/:postId/comments', requestValidator(commentSchema), postExist, comment.create);
api.patch('/posts/:postId/comments/:commentId', requestValidator(commentSchema), postExist, comment.update);
api.delete('/posts/:postId/comments/:commentId', postExist, comment.destroy);

module.exports = api;
