const CustomError = require('./custom-error');

const NotFoundErrors = class NotFoundError extends CustomError{
    constructor(){
        super();
        this.statusCode = 404;
    }
    serializeErrors() {
        console.log('inside class');
        return [{ message: 'not found' }];
    }
}

module.exports = NotFoundErrors;