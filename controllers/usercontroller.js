const user = require('../models/userModel');
var count = 0
const limit = 100

const create_user = (req, res) => {
    const User = new user(req.body)
    const { name, email, phoneNumber, address } = req.body

    user.findOne({ email })
        .exec((err, userr) => {
            if (userr) {
                console.log('Email is taken')
                res.redirect('/') //Redirect to payment gateaway
            }
            else {
                user.findOne({ phoneNumber })
                    .exec((err, user) => {
                        if (user) {
                            console.log('PhoneNumber is taken')
                            res.redirect('/') //Redirect to payment gateaway
                        }
                        else if (count >= limit) {
                            console.log('Limit reached')
                            User.save()
                                .then((result) => {
                                    res.redirect('/') //Redirect to payment gateaway
                                })
                                .catch((err) => { console.log(err) })
                        }
                        else {
                            User.save()
                                .then((result) => {
                                    count += 1
                                    console.log(count)
                                    res.redirect('/') //Redirect to home and payment placed
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