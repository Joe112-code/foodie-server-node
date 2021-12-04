const mongoose = require('mongoose');
const profile_schema = mongoose.Schema({

                                           name: String,
                                           email: String,
                                           image_url: String,
                                           location: String,
                                           dateOfBirth: String,
                                           dateJoined: String

                                   }, {collection: "personalprofile"});
module.exports = profile_schema;