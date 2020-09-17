const User = require("../models/user");
const User_profile = require("../models/user_profile");

module.exports = {
  getUsers: async (req, res) => {
    const users = await User.find({});
    res.json(users);
  },

  createUser: async (req, res, next) => {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.json(user);
  },

  getProfile: async (req, res, next) => {
    const { userProfileId } = req.params;
    const user = await User_profile.findById(userProfileId);
    res.json(user);
  },

  createProfile: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    req.body.userId = user._id;
    const newUser_profile = new User_profile(req.body);
    await newUser_profile.save();
    res.json({ success: true });
  },

  getAvg: async (req, res, next) => {
    var tot = 0;
    var avg = 0;
    const users = await User_profile.find({});
    users.map((element) => {
      const val1 = new Date().getFullYear() - element.dob.getFullYear();
      tot += val1;
    });
    avg += tot / users.length;
    res.json(avg);
  },
};
