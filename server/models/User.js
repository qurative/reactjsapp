const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// mongoose.set('useCreateIndex', true);
// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    user_type: {
        type: String,
        enum : ['admin', 'user'],
        default: 'user'
    },
    status: {
        online: {
            type: Boolean,
            default: true
        },
        verified: {
            type: Boolean,
            default: false
        },
        banned: {
            type: Boolean,
            default: false
        }
    },
    dob: {
        type: Date
    },
},{timestamps: true});

module.exports = mongoose.model("User", UserSchema);
