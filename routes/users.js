const express = require('express');
const router = express.Router();
// const router = require('express-promise-router')();

const Userscontroller = require('../controllers/users');

router.get('/', Userscontroller.index);
router.post('/', Userscontroller.newUser);

router.get('/:userId', Userscontroller.getUser);
// router.put('/:userId', Userscontroller.replaceUser);
// router.patch('/:userId', Userscontroller.updateUser);

router.get('/:userId/user_profiles', Userscontroller.getUserUser_profiles);
router.post('/:userId/user_profiles', Userscontroller.newUserUser_profile);


router.get('/avg', Userscontroller.getUserUser_profileAvg);


module.exports = router;