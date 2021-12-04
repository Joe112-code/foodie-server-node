const mongoose = require('mongoose');
const comment_schema = require('./comment-schema');
const my_comment_model = mongoose.model('MyCommentModel', comment_schema);
module.exports = my_comment_model;