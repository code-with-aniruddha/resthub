const CustomError = require('./custom-error');

const ReqValidationError = class RequestValidationError extends CustomError{
    constructor(incomingError){
        super();
        this.errors = incomingError;
        this.statusCode = 400;
    }
    serializeErrors() {
        return this.errors.map(err=>{
            return {
                message: err.msg,
                field: err.param
            }
        });
    }
}

module.exports = ReqValidationError;