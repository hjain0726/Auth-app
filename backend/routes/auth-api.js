var express = require('express');
var authOperations = require('../db/authentication-operation');
var router = express.Router();

router.post('/signup', (req, res) => {
    var obj = req.body;
    authOperations.signup(obj, res);
});

router.post('/signin', (req, res) => {
    var obj = req.body;
    authOperations.signin(obj, res);
});



module.exports = router;