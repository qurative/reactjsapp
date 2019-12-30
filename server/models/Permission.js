const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// mongoose.set('useCreateIndex', true);
// Create Schema
const PermissionSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    key: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    controller: {
        type: String,
        trim: true
    },
    method: {
        type: String,
        trim: true
    }
},{timestamps: true});

var Permission = (mongoose.model("Permission", PermissionSchema));
module.exports = Permission;
// module.exports = mongoose.model("Permission", PermissionSchema);
