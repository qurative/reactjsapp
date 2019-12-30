const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// mongoose.set('useCreateIndex', true);
// Create Schema
const RoleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    key: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},{timestamps: true});

const Role = (mongoose.model("Role", RoleSchema));
module.exports = Role;
// module.exports = mongoose.model("Role", RoleSchema);
