const User = require('../models/user');
const User_profile = require('../models/user_profile');

module.exports = {
    index: async(req, res, next) => {
            const users = await User.find({});
            // // console.log(users);
            // const age1 = await User.find({}).populate('user_profiles');
            // console.log(age1);
            res.status(200).json(users);
    },

    newUser: async(req, res, next) => {
            const newUser = new User(req.body);
            const user = await newUser.save();
            res.status(201).json(user);
},

getUser: async(req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(201).json(user);
},

// replaceUser: async(req, res, next) => {
//     const { userId } = req.params;
//     const newUser = req.body;
//     const result = await User.findByIdAndUpdate(userId, newUser)
//     res.status(201).json({ sucess: true});
// },

// updateUser: async(req, res, next) => {
//     const { userId } = req.params;
//     const newUser = req.body;
//     const result = await User.findByIdAndUpdate(userId, newUser)
//     res.status(201).json({ sucess: true});
// },

getUserUser_profiles: async(req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate('user_profiles');
    console.log(user);
    res.status(201).json(user.user_profiles);
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

    res.status(201).json(newUser_profile);

},


getUserUser_profileAvg: async(req, res, next) => {
    var temp = [];
    const users = await User.find({});
    users.map((element) => {
        // const val1 = await User.findById(userId).populate('user_profiles');
        const val2 = element.user_profiles;
        const val3 = val2[0].dob;
        temp.push(val3);
    });
    // const { userId } = req.params;
    // const val1 = await User.findById(userId).populate('user_profiles');
    // const val2 = val1.user_profiles;
    // const val3 = val2[0].dob;
    console.log(temp);
    // console.log(val1);
    // res.status(201).json(user.test_scores);
}
    

};