import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
