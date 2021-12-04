const dao = require('../db/myRestaurantProfile/profile-dao')

module.exports = (app) => {

    const getCurrentProfile = (req, res) => {
        dao.findAllProfile()
            .then(profile => res.json(profile));


    }
    app.get('/rest/my_restaurant_profile', getCurrentProfile);




    const updateCurrentProfile = (req, res) => {
        const id = req.params['id'];
        dao.updateProfile(id, req.body).then(status => res.send(status));

    }

    app.put('/rest/my_restaurant_profile/:id', updateCurrentProfile);

    const deleteProfile = (req, res) =>
        dao.deleteProfile(req.params.id)
            .then((status) => res.send(status));
    app.delete('/rest/my_restaurant_profile/:id', deleteProfile);


};