
import mongoose from 'mongoose';
import Role from './../models/Role';
const ObjectId = mongoose.Types.ObjectId;

const getRoleId = async function() {
    let {
        id: role_id
    } = await Role.findOne({
        key: 1
    });
    return {role_id:  role_id};
};
// console.log('role_id ', getRoleId.role_id);
Role.findOne({
    key: 1
}).then((role) => {

});
const users = [
    {
        "name": "admin",
        "username": "administrator",
        "email": process.env.ADMIN_EMAIL || 'ramesh.katalysttech@gmail.com',
        "password": "Pass@2020",
        "roles": "admin",
        "role_id": ObjectId(role_id),
        "status": {
            online: true,
            verified: true,
            banned: false
        },
    },
];

module.exports = users;
