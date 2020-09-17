const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_profileSchema = new Schema({
  dob: Date,
  Mobile_no: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const User_profile = mongoose.model("user_profile", user_profileSchema);
module.exports = User_profile;
