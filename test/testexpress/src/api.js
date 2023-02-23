var express = require('express');
var serverless = require('serverless-http');


const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello Admin");
})

app.use('/', router)

module.exports.handler = serverless(app);