const CommentModel = require('../model/Comment');

class CommentRepository {

  static all(postId) {
    return CommentModel.find({ post_id: postId, is_deleted: 0 });
  }

  static create(comment) {
    return CommentModel.create(comment);
  }

  static findOne(clause) {
    return CommentModel.findOne({ ...clause, is_deleted: 0 });
  }
}

module.exports = CommentRepository;
