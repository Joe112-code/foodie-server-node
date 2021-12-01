// let profile = require('../reducers/data/profile.json');
const dao = require('../db/businessProfile/profile-dao')

module.exports = (app) => {

    const getCurrentProfile = (req, res) => {
        dao.findAllProfile()
            .then(profile => res.json(profile));


    }
    app.get('/rest/businessprofile', getCurrentProfile);




    const updateCurrentProfile = (req, res) => {
        const id = req.params['id'];
        dao.updateProfile(id, req.body).then(status => res.send(status));

    }

    app.put('/rest/businessprofile/:id', updateCurrentProfile);


};