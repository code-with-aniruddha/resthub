const NotAuthorized = require('../errors/not-authorized-error');

const reqAuth = (req, res, next) => {
    if(!req.session?.jwt){
        throw new NotAuthorized();
    }
    next();
}

module.exports = reqAuth;