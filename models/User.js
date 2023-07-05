
const mongoose = require('mongoose');
const reqString = { type: String, required: true };

const UserSchema = new mongoose.Schema({
  fullname: reqString,
  username: reqString,
  email: reqString,
  password: reqString,
  date: {
    type: Date,
    default: Date.now()
  },
  points: {
    type: Number,
    default: 0
  },
  latestSearch: {
    type: String,
    default: 'Delhi'
  }
}, { timestamps: true });

UserSchema.methods.updateLatestSearch = function(newCity) {
    this.latestSearch = newCity;
    return this.save();
  };
  
  const User = mongoose.model('users', UserSchema);
  
  module.exports = User;