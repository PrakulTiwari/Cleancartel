const user = require('../models/userModel');

const create_user = (req, res) => {
    const User = new user(req.body)
    User.save()
        .then((result) => {
            res.redirect('/')
        })
        .catch((err) => { console.log(err) })
}

module.exports = {
    create_user
}