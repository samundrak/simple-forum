const PostModel = require('../model/Post');

class PostRepository {
  static all(clause = {}) {
    return PostModel.find({ ...clause, is_deleted: 0 })
      .populate('users', 'first_name')
      .sort({
        created_at: 'desc',
      });
  }

  static create(newPost) {
    return PostModel.create(newPost);
  }

  static findOne(clause) {
    return PostModel.findOne({ ...clause, is_deleted: 0 }).populate('users');
  }
}

module.exports = PostRepository;
