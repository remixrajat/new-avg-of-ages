const User = require('../models/user');
const User_profile = require('../models/user_profile');

module.exports = {
index: async(req, res) => {
    const users = await User.find({});
    res.json(users);
},

newUser: async(req, res, next) => {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.json(user);
},

getUserUser_profiles: async(req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate('user_profiles');
    console.log(user);
    res.json(user.user_profiles);
},

newUserUser_profile: async(req, res, next) => {
    const { userId } = req.params; 
    const newUser_profile = new User_profile(req.body);
    console.log(newUser_profile);
    const user = await User.findById(userId);
    newUser_profile.users = user;
    await newUser_profile.save();
    user.user_profiles.push(newUser_profile);
    await user.save();
    res.json({success: true});
},

getUserUser_profileAvg: async(req, res, next) => {
    var temp = [];
    var tot = 0;
    var avg = 0;
    const users = await User.find({}).populate('user_profiles');
    users.map((element) => {
        const val2 = element.user_profiles;
        const val3 = val2[0].dob;
        temp.push(val3);
    });
    temp.map((elem) => {
        tot += elem;
    });
    avg += tot/temp.length;
    res.json(avg);
}
};