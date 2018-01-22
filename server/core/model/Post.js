const mongoose = global.db;
const Schema = require('mongoose').Schema;

const formalStringType = {
  type: String,
  lowercase: true,
};
const Post = mongoose.Schema({
  title: formalStringType,
  description: formalStringType,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  is_deleted: {
    type: Number,
    default: 0,
  },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('posts', Post);
