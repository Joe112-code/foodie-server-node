const mongoose = require('mongoose');
const profile_schema = mongoose.Schema({
                                           firstName: String,
                                           lastName: String,
                                           restaurantName: String,
                                           email: String,
                                           profilePicture: String,
                                           address: String,
                                           dateOfBirth: String,
                                           dateJoined: String,
                                           tag:String,
                                           rating:Number

                                   }, {collection: "businessprofile"});
module.exports = profile_schema;