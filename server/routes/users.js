console.log(__dirname);
const express = require('express');
const userController = require('../controllers/user');
const authController = require('../controllers/auth');
const cardController = require('../controllers/cardsController')

// import {
//     registerUser,
//     findUserById,
//     findUserProfile,
//     deleteUser
// } from '../controllers/user';

// import them to protect routes

const router = express.Router();

router.route('/api/users')
    .post(userController.registerUser);


router
    .route('/api/users/:userId')
    .get(authController.requireSignin, userController.findUserProfile)
    .delete(authController.requireSignin, authController.hasAuthorization, userController.deleteUser);

router.param('userId', userController.findUserById);

router.route("/submit/:card")
    .post(cardController.tripDetails)

router.route("/api/submit")
    .post(cardController.create)
// .post(cardController.trip)

router.route("/submit/:id")
    .get(cardController.findOne)

router.route('/api/chartdata')
    .get(cardController.getAllChartData)

// router.route('/cards')
//     .get(cardController.findEmail)


module.exports = router;