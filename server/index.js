import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import './config/db';
import passport from "passport";
import users from "./routes/api/users";
dotenv.config();

const app = express();
const port = process.env.APIPORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// respond with "hello world" when a GET request is made to the homepage
/*app.get('/', function (req, res) {
    res.send('Hello World');
});*/

app.listen(port, () => console.log(`${process.env.REACT_APP_NAME || 'App'} listening on port ${port}!`));
