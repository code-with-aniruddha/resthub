const express = require('express');
require('express-async-errors');

const {body, validationResult} = require('express-validator');
const router = express.Router();

const User = require('./../models/user');
const ReqValidationError = require('./../errors/request-validation-error');
const BadRequestError = require('./../errors/bad-request-error');


router.post('/api/users/signup',[
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({min: 4, max: 16})
        .withMessage('Password must be min 4 and max 16 characters')
], async (req, res) => {
    // check for validation error
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        // handle error
        throw new ReqValidationError(errors.array());
    }
    // throw new DbConnectionError('db connection error string');

    const {name, email, password, usertype} = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser){
        throw new BadRequestError('User exist');
    }
    const user = new User({name, email, password, usertype});
    await user.save();
    res.status(201).send(user);
});

module.exports = router;
// export { router as signupRouter };