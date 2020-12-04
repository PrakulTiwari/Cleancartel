const express = require('express')
const route = express.Router();
const userController = require('../controllers/usercontroller')

route.post('/userorder', userController.create_user)
// route.get('/success', userController)


module.exports = route;