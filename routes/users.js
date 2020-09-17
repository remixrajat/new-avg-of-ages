const express = require("express");
const router = express.Router();
const Userscontroller = require("../controllers/users");

router.get("/getUsers", Userscontroller.getAllUsers);
router.post("/createUser", Userscontroller.newUser);

router.get("/:userId/getProfile", Userscontroller.getUserUserprofiles);
router.post("/:userId/createProfile", Userscontroller.newUserUserprofile);

router.get("/getAvg", Userscontroller.getUserUserprofileAvg);
module.exports = router;
