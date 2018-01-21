const Joi = require('joi');

module.exports = Joi.object().keys({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().min(3).required(),
});
