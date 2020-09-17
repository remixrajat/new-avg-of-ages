const express = require("express");
const router = express.Router();
const Userscontroller = require("../controllers/users");

router.get("/getUsers", Userscontroller.getUsers);
router.post("/createUser", Userscontroller.createUser);

router.get("/:userProfileId/getProfile", Userscontroller.getProfile);
router.post("/:userId/createProfile", Userscontroller.createProfile);

router.get("/getAvg", Userscontroller.getAvg);
module.exports = router;
