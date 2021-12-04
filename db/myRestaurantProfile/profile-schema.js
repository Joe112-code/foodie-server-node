const mongoose = require('mongoose');
const profile_schema = mongoose.Schema({
                                           name: String,
                                           image_url: String,
                                           location: String,
                                           categories:String,
                                           rating:Number

                                   }, {collection: "my_restaurant_profile"});
module.exports = profile_schema;