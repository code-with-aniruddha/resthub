const CustomError = require('./custom-error');

const DbErrorClass = class DBConnectionError extends CustomError{
    constructor(){
        super();
        this.statusCode = 500;
        this.reason = 'Error connecting to database';
    }
    serializeErrors() {
        return [{ message: this.reason }];
    }
}

module.exports = DbErrorClass;