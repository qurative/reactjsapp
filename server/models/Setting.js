import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SettingSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    key: {
        type: String,
        required: true,
        trim: true
    },
    value: {
        type: String,
        trim: true
    }
});

var Setting = (mongoose.model("Setting", SettingSchema));
module.exports = Setting;
/*module.exports = (model) => {
    if (model) {
        return SettingSchema;
    } else {
        return mongoose.model('Setting', SettingSchema);
    }
};*/
