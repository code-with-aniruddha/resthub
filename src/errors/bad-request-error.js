const CustomError = require('./custom-error');

const BadReqError = class BadRequestError extends CustomError{
    constructor(message){
        super(message);
        this.statusCode = 400;
    }
    serializeErrors() {
        return [{ message: this.message }];
    }
}

module.exports = BadReqError;