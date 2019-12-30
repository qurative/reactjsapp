const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// mongoose.set('useCreateIndex', true);
// Create Schema
const PermissionRoleSchema = new Schema({
    permission_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Permission'
    },
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
},{timestamps: true});

module.exports = mongoose.model("PermissionRole", PermissionRoleSchema);
