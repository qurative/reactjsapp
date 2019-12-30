const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;
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
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
    image: String,
    password: {
        type: String,
        trim: true,
        required: true
    },
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
    roles: {
        type: [{
            type: String,
            enum: ['user', 'admin']
        }],
        default: ['user']
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
    provider: {
        type: String,
        default: 'local',
        required: 'Provider is required'
    },
    providerData: {},
    dob: {
        type: Date
    },
},{timestamps: true});

UserSchema.pre('save', function(next) {
    let user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

// module.exports = mongoose.model("User", UserSchema);
const User = (mongoose.model("User", UserSchema));
module.exports = User;
