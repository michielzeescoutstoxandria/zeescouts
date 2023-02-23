var express = require('express');
var router = express.Router();
// const keycloak = require('../config/keycloak-config.js').getKeycloak();

router.get('/anonymous', function(req, res){
    res.send("Hello Anonymous");
    res.sendFile(__dirname + "/index.html");
});
router.get('/user', function(req, res){
    res.send("Hello User");
});

router.get('/admin', function(req, res){
    res.send("Hello Admin");
});

router.get('/all-user', function(req, res){
    res.send("Hello All User");
});

module.exports = router;