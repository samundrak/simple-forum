const Joi = require('joi');

module.exports = Joi.object().keys({
  comment: Joi.string().min(3).required(),
});
