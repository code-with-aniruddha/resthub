const express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
cookieSession = require('cookie-session');
currentUserRouter =  require('./routes/current-user'),
signinRouter =  require('./routes/signin'),
signoutRouter =  require('./routes/signout'),
signupRouter =  require('./routes/signup'),

errorHandler = require('./middlewares/error-handler'),
notFoundError = require('./errors/not-found-error');

const app = express();
app.use(cookieSession({
    signed: false
}));
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

app.post('*', ()=>{
    throw new notFoundError();
});

app.use(errorHandler);

const start = async () => {
    try{
        await mongoose.connect('mongodb://localhost/resthub', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    } catch(err){
        console.log('db error');
        console.log(err);
    }

    app.listen(8000, ()=>{
        console.log('app is listening on 8000...');
    }); 
}

start();
