const express = require('express');
const router = express.Router();
const Userscontroller = require('../controllers/users');

router.get('/details', Userscontroller.index);
router.post('/pushuser', Userscontroller.newUser);

router.get('/:userId/user_profiles', Userscontroller.getUserUser_profiles);
router.post('/:userId/user_profiles', Userscontroller.newUserUser_profile);

router.get('/avg', Userscontroller.getUserUser_profileAvg);
module.exports = router;