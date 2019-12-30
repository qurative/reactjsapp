import mongoose from 'mongoose';
//import data to be seeded
import settingData from './settings';
import permissionsData from './permissions';
import rolesData from './roles';
// import usersData from './users';

//models
import Setting from './../models/Setting';
import Permission from './../models/Permission';
import Role from './../models/Role';
import User from './../models/User';

const ObjectId = mongoose.Types.ObjectId;
/**
 * - Seed all fields
 * - Seed all the default profile types with default fields
 */
Setting
    .countDocuments()
    .then(count => {
        if (count == 0) {
            Setting
                .insertMany(settingData)
                .then(settingCreated => {
                    console.log(`Setting successfully seeded.`);
                })
        }
    })
    .catch(err => {
        console.error(`Error:settings couldn't be seeded`);
    });

Permission
    .countDocuments()
    .then(count => {
        if (count == 0) {
            Permission
                .insertMany(permissionsData)
                .then(permissionsCreated => {
                    console.log(`Permission successfully seeded.`);
                })
        }
    })
    .catch(err => {
        console.error(`Error:permissions couldn't be seeded`);
    });

Role
    .countDocuments()
    .then(count => {
        if (count == 0) {
            Role
                .insertMany(rolesData)
                .then(roleCreated => {
                    console.log(`Role successfully seeded.`);
                })
        }
    })
    .catch(err => {
        console.error(`Error:roles couldn't be seeded`);
    });

Role.find({
    key: 1
}).then((role) => {
    User
        .countDocuments()
        .then(count => {
            if (count === 0) {
                const newUser = new User({
                    "name": "admin",
                    "username": "administrator",
                    "email": process.env.ADMIN_EMAIL || 'ramesh.katalysttech@gmail.com',
                    "password": "Pass@2020",
                    "roles": "admin",
                    "role_id": ObjectId(role._jd),
                    "status": {
                        online: true,
                        verified: true,
                        banned: false
                    },
                });
                newUser
                    .save()
                    .then(user => console.log(`User successfully seeded.`))
                    .catch(err => console.log(err));
            }
        })
        .catch(err => {
            console.error(`Error:User couldn't be seeded`);
        });
});
