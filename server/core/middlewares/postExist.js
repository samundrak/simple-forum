const PostRepository = require('../repositories/PostRepository');

module.exports = (req, res, next) => {
  const post = PostRepository.findOne({ _id: req.params.postId });
  if (!post) {
    return res.boom.notFound('Post not found!');
  }
  req.post = post;
  return next();
};
