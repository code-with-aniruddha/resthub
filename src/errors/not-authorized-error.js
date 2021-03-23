const CustomError = require('./custom-error');
const NotAuth = class NotAuthorized extends CustomError {
 constructor(){
    super();
    this.statusCode = 401;
 }
 serializeErrors(){
    return [{messgae: 'Not Authorized'}]
 }
}
module.exports = NotAuth;