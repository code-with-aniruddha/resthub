const express = require('express');
jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const BadReqError = require('../errors/bad-request-error');
const user = require('../models/user');
const Password = require('./../services/password');
require('express-async-errors');
const ReqValidationError = require('./../errors/request-validation-error'); 

const router = express.Router();

router.post('/api/users/signin', [
        body('email')
        .isEmail()
        .withMessage('Email must be valid'),
        body('password')
        .trim()
        .notEmpty()
        .withMessage('Password must be valid')
    ],
    async (req, res) => {
        const reqErrors = validationResult(req);
        if(!reqErrors.isEmpty()){
            throw new ReqValidationError(reqErrors.array());
        }
        const {email, password} = req.body;

        // check if email is existing
        const existingEmail = await user.findOne({email});
        if(!existingEmail) {
            throw new BadReqError('Invalid credential');
        }
        //check if password matches
        const passwordMatch = await Password.compare(existingEmail.password, password);
        if(!passwordMatch){
            console.log('here');
            throw new BadReqError('Invalid credential');
        }

        // attaching JWT in Cookie
        const jwtUser = jwt.sign({
            email: existingEmail.email,
            id: existingEmail._id
        }, 'abcd');
        req.session.jwt = jwtUser;
        
        res.status(200).send(existingEmail);
    }
);

module.exports = router;
// export { router as signinRouter };