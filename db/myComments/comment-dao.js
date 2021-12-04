const comment_model = require('./comment-model');

const findAllComment = () => comment_model.find();
const createComment = (newComment) => comment_model.create(newComment);
const deleteComment= (id) => comment_model.deleteOne({_id: id});
const findCommentById = (id) => comment_model.findById(id);
const updateComment = (id, comment)=> comment_model.updateOne({_id: id}, {$set: comment});




module.exports = {
    findAllComment, createComment,deleteComment,
    findCommentById, updateComment
};