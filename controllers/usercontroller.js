const user = require('../models/userModel');

const create_user = (req, res) => {
    const User = new user(req.body)
    const { name, email, phonenumber, address } = req.body

    user.findOne({ email })
        .exec((err, user) => {
            if (user) {
                console.log('Email is taken')
                res.redirect('/')
            }
            else {
                user.findOne({ phonenumber })
                    .exec((err, user) => {
                        if (user) {
                            console.log('Phonenumber is taken')
                            res.redirect('/')
                        }
                        else {
                            User.save()
                                .then((result) => {
                                    res.redirect('/')
                                })
                                .catch((err) => { console.log(err) })
                        }
                    })
            }
        })

}

module.exports = {
    create_user
}