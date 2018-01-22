const api = require('express').Router();
const auth = require('../../controllers/AuthController');
const requestValidator = require('../../middlewares/requestValidator');
const registerRequestSchema = require('../../rules/request/RegisterSchema');
const loginRequestSchema = require('../../rules/request/LoginSchema');
const post = require('../../controllers/PostController');
const comment = require('../../controllers/CommentController');

api.post('/forgot-password', auth.forgotPassword);
api.post('/login', requestValidator(loginRequestSchema), auth.login);
api.post('/register', requestValidator(registerRequestSchema), auth.register);
api.post('/new-password/:hash', auth.createNewPassword);

api.get('/posts', post.index);
api.get('/posts/:id', post.show);
api.get('/post/:postId/comments', comment.index);

module.exports = api;
