const dao = require('../db/myComments/comment-dao')

module.exports = (app) => {
    const findAllComments = (req, res) =>
        dao.findAllComment()
            .then(comments => res.json(comments));
    app.get('/rest/my_comments', findAllComments);

    const deleteComment = (req, res) =>
        dao.deleteComment(req.params.id)
            .then((status) => res.send(status));

    app.delete('/rest/my_comments/:id', deleteComment);


};