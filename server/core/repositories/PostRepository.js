const PostModel = require('../model/Post');

class PostRepository {
  static all(clause = {}) {
    return PostModel.find({ ...clause, is_deleted: 0 });
  }

  static create(newPost) {
    return PostModel.create(newPost);
  }

  static findOne(clause) {
    return PostModel.findOne({ ...clause, is_deleted: 0 });
  }
}

module.exports = PostRepository;
