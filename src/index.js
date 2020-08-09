const express = require('express'),
bodyParser = require('body-parser'),
currentUserRouter =  require('./routes/current-user'),
signinRouter =  require('./routes/signin'),
signoutRouter =  require('./routes/signout'),
signupRouter =  require('./routes/signup'),
notFoundError = require('./errors/not-found-error');

errorHandler = require('./middlewares/error-handler');

const app = express();
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);



app.all('*', ()=>{
    console.log('here');
    throw new notFoundError('fer');
});

app.use(errorHandler);

app.listen(8000, ()=>{
    console.log('app is listening on 8000...');
});