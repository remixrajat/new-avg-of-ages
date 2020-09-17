const User = require("../models/user");
const User_profile = require("../models/user_profile");

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await User.find({});
    res.json(users);
  },

  newUser: async (req, res, next) => {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.json(user);
  },

  getUserUserprofiles: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate("user_profiles");
    res.json(user.user_profiles);
  },

  newUserUserprofile: async (req, res, next) => {
    const { userId } = req.params;
    const newUser_profile = new User_profile(req.body);
    const user = await User.findById(userId);
    newUser_profile.users = user;
    await newUser_profile.save();
    user.user_profiles.push(newUser_profile);
    await user.save();
    res.json({ success: true });
  },

  getUserUserprofileAvg: async (req, res, next) => {
    var tot = 0;
    var avg = 0;
    const users = await User.find({}).populate("user_profiles");
    users.map((element) => {
      const val1 =
        new Date().getFullYear() - element.user_profiles[0].dob.getFullYear();
      tot += val1;
    });
    avg += tot / users.length;
    res.json(avg);
  },
};
