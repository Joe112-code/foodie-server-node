const mongoose = require('mongoose');
const comment_schema = mongoose.Schema({
                                           restaurant_name: String,
                                           rating: Number,
                                           time_created: String,
                                           text: String

                                       }, {collection: "my_comments"});
module.exports = comment_schema;