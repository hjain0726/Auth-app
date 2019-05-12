var userModel = require('../db/schema/signup-schema');
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');


const authOperations = {
    signup(obj, res) {
        userModel.find({ email: obj.email }, (err, docs) => {
            if (err) {
                res.json(err);
            } else {
                if (docs && docs.length > 0) {
                    res.json({ msg: 'User Already Exist' });
                } else {
                    obj.password = passwordHash.generate(obj.password);
                    var user = new userModel(obj);
                    user.save((err) => {
                        if (err) {
                            res.json(err)
                        } else {
                            var token = jwt.sign({ email: obj.email }, 'secret', { expiresIn: '8h' });
                            res.json({ msg: 'Successfully register', token: token });
                        }
                    });
                }
            }
        })
    },

    signin(obj, res) {
        userModel.find({ email: obj.email }, (err, docs) => {
            if (err) {
                res.json(err);
            } else {
                if (docs && docs.length > 0) {
                    var result = passwordHash.verify(obj.password, docs[0].password);
                    if (result) {
                        var token = jwt.sign({ email: obj.email }, 'secret', { expiresIn: '8h' });
                        res.json({ msg: 'successfully login', token: token });
                    } else {
                        res.json({ msg: 'Invalid email or Password' });
                    }
                } else {
                    res.json({ msg: 'Invalid email or Password' });
                }
            }
        })
    }
};

module.exports = authOperations;