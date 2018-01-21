const mongoose = global.db;
const formalStringType = {
  type: String,
  lowercase: true,
};
const Comment = mongoose.Schema({
  post_id: formalStringType,
  user_id: String,
  comment: formalStringType,
  is_deleted: {
    type: Number,
    default: 0,
  },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('comments', Comment);
