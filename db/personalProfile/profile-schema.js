const mongoose = require('mongoose');
const profile_schema = mongoose.Schema({
                                           firstName: String,
                                           lastName: String,
                                           email: String,
                                           profilePicture: String,
                                           location: String,
                                           dateOfBirth: String,
                                           dateJoined: String

                                   }, {collection: "personalprofile"});
module.exports = profile_schema;