const mongoose = require('mongoose');
const userSchema = mongoose.Schema (
    {
        name : String,
        email : String,
        password : String,
        role : String,
        created_at : Date,
        Credit : Number,
    }
);

module.exports = mongoose.model('User', userSchema)
