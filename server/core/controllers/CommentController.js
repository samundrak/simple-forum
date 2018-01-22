const CommentRepository = require('../repositories/CommentRepository');

const commentController = {
  async index(req, res) {
    try {
      const comments = await CommentRepository.all(req.params.postId);
      if (comments) {
        return res.json(comments);
      }

      return res.boom.notFound();
    } catch (error) {
      global.logger.error(error);
      return res.boom.badImplementation();
    }
  },
  async create(req, res) {
    try {
      const comment = await CommentRepository.create({
        ...req.body,
        user_id: req.user._id,
        post_id: req.params.postId,
      });
      if (comment) {
        return res.status(201).json(comment);
      }

      throw new Error('Unable to create comment');
    } catch (err) {
      global.logger.error(err);
      return res.boom.badImplementation();
    }
  },
  async update(req, res) {
    try {
      const comment = await CommentRepository.findOne({
        post_id: req.params.postId,
        user_id: req.user._id,
        _id: req.params.commentId,
      });
      if (!comment) {
        return res.boom.unauthorized();
      }

      const newComment = await comment.update(req.body);
      if (newComment) {
        return res.status(200).json(newComment);
      }

      return res.boom.badImplementation();
    } catch (error) {
      global.logger.error(error);
      return res.boomd.badImplementation();
    }
  },
  destroy(req, res) {
    req.body.is_deleted = 1;
    commentController.update(req, res);
  },
};
module.exports = commentController;
