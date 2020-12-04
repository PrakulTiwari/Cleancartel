const user = require('../models/userModel');
var count = 0
const limit = 100
// const alert = require('alert')

const create_user = (req, res) => {
    const User = new user(req.body)
    const { name, email, phoneNumber, address, paymentmode, pairs } = req.body
    console.log(paymentmode);
    if (paymentmode == 'gateaway') {
        user.findOne({ email })
            .exec((err, userr) => {
                if (userr) {
                    console.log('Email is taken')
                    res.redirect('https://rzp.io/l/cq2Ag7sE')
                    // alert('Email is already taken')
                    // res.send(`
                    //     <script>setTimeout(()=>{
                    //         alert('Email is already taken')
                    //         window.location.href='/'
                    //     },1)</script>
                    // `)
                    // res.redirect('/') //Redirect to payment gateaway
                }
                else {
                    user.findOne({ phoneNumber })
                        .exec((err, user) => {
                            if (user) {
                                console.log('PhoneNumber is taken')
                                res.redirect('https://rzp.io/l/cq2Ag7sE')

                                // res.send(`
                                //     <script>setTimeout(()=>{
                                //         alert('Phonenumber is already taken')
                                //         window.location.href='/'
                                //     },1)</script>
                                // `)
                            }
                            // else if (count >= limit) {
                            //     console.log('Limit reached')
                            //     User.save()
                            //         .then((result) => {
                            //             res.send(`
                            //             <script>setTimeout(()=>{
                            //                 alert('100 users has been reached')
                            //                 window.location.href='/'
                            //             },1)</script>
                            //         `)
                            //         })
                            //         .catch((err) => { console.log(err) })
                            // }
                            else {
                                User.save()
                                    .then((result) => {
                                        count += 1
                                        console.log(count)
                                        res.redirect('/success') //Redirect to home and payment placed
                                    })
                                    .catch((err) => { console.log(err) })
                            }
                        })
                }
            })
    }

    else {
        User.save()
            .then((result) => {
                count += 1
                console.log(count)
                res.redirect('/success') //Redirect to home and payment placed
            })
            .catch((err) => { console.log(err) })
    }
}

module.exports = {
    create_user
}