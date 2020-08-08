const reqvalidError = require('./../errors/request-validation-error');
const errorHandler = (err, req, res, next) => {
    // console.log(err);
    if (err instanceof reqvalidError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
      }
    // res.status(err.statusCode).send({
    //     errors: err.serializeErrors
    // })
}
module.exports = errorHandler;