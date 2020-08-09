const CustomError = require('./custom-error');

const NotFoundErrors = class NotFoundError extends CustomError{
    constructor(){
        super();
        this.statusCode = 404;
        this.reason = 'Not Found';
    }
    serializeErrors() {
        return [{ message: this.reason }];
    }
}

module.exports = NotFoundErrors;