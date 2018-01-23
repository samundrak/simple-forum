const PostRepository = require('../repositories/PostRepository');

module.exports = {
  index(req, res) {
    return PostRepository.all()
      .then(data => res.status(201).json(data))
      .catch(() => res.boom.badImplementation());
  },

  async show(req, res) {
    try {
      const post = await PostRepository.findOne({ _id: req.params.id });
      if (post) {
        return res.json(post);
      }
      return res.boom.notFound();
    } catch (error) {
      global.logger.error(error);
      return res.boom.badImplementation();
    }
  },

  create(req, res) {
    return PostRepository.create({ ...req.body, user: req.user._id })
      .then(data => res.status(201).json(data))
      .catch((reason) => {
        if (typeof reason === 'object') {
          return res.boom.badImplementation(reason.message);
        }
        return res.boom.badRequest(null, { message: reason });
      });
  },

  async update({ params: { id: postId }, body, user }, res) {
    const post = await PostRepository.findOne({ _id: postId });
    if (post.user._id.toString() !== user._id.toString()) {
      return res.boom.unauthorized();
    }

    try {
      const update = await post.update(body);
      if (update) {
        global.logger.info(`A post with id ${postId} has been updated.`);
        return res.status(200).send();
      }

      throw new Error('Unable to update post.');
    } catch (error) {
      global.logger.error(error);
      return res.boom.badImplementation();
    }
  },

  async destroy({ params: { id: postId }, body, user }, res) {
    const post = await PostRepository.findOne({ _id: postId });
    if (post.user._id.toString() !== user._id.toString()) {
      return res.boom.unauthorized();
    }
    try {
      const payload = { ...body, is_deleted: 1 };
      const update = await post.update(payload);
      if (update) {
        global.logger.info(`A post with id ${postId} has been deleted.`);
        return res.status(200).send();
      }

      throw new Error('Unable to delete post.');
    } catch (error) {
      global.logger.error(error);
      return res.boom.badImplementation();
    }
  },
};
