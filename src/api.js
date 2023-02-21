var express = require('express');
var serverless = require('serverless-http');


const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        'hello': 'hi!'
    })
})

app.use('/', router)

module.exports.handler = serverless(app);