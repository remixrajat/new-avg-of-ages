const md5 = require('md5');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: String,
    email: String,
    lastname: String,
    password: String,
    user_profiles: [{
        type: Schema.Types.ObjectId,
        ref: 'user_profile'
    }]
});

const User = mongoose.model ('user', userSchema);

module.exports = User;