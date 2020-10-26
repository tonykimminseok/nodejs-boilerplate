const mongoose = require('mongoose')

// User Schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        // whitespaes will be removed
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    // to define if the user is an admin or normal
    role: {
        type: Number,
        default: 0
    },
    image: String,
    // 유효성
    token: {
        type: String
    },
    // 유효기간
    tokenExp: {
        type: Number
    }
})

// the schema, userSchema's name is User
const User = mongoose.model('User', userSchema)

module.exports = { User }
