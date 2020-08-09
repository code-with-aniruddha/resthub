const express = require('express');
const {body, validationResult} = require('express-validator');
const router = express.Router();

const ReqValidationError = require('./../errors/request-validation-error');
const DbConnectionError = require('./../errors/db-connection-error');

router.post('/api/users/signup',[
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({min: 4, max: 16})
        .withMessage('Password must be min 4 and max 16 characters')
], (req, res) => {
    // check for validation error
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        // handle error
        throw new ReqValidationError(errors.array());
    }
    throw new DbConnectionError('db connection error string');
});

module.exports = router;
// export { router as signupRouter };