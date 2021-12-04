const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/foodie');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
               "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
               "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

require('./services/personalProfile-service')(app);
require('./services/businessProfile-service')(app);
require('./services/myRestaurantProfile-service')(app);
require('./services/myComments-service')(app);

app.listen(5000);