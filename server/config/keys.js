module.exports = {
    mongoURI: process.env.MONGODB_URL || "mongodb://localhost:27017/reactjsapp",
    secretOrKey: process.env.PASSPORT_SECRET || "secret"
};
