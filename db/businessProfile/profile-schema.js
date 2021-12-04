const mongoose = require('mongoose');
const profile_schema = mongoose.Schema({
                                           name: String,
                                           email: String,
                                           image_url: String,
                                           address: String,
                                           dateOfBirth: String,
                                           tel:Number

                                   }, {collection: "businessprofile"});
module.exports = profile_schema;