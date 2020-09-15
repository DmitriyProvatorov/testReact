


const createError = require('http-errors');
const express = require('express');


const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
//const logger = require('morgan');

const app = express();

const authRouter = require('./routes/auth'); // авторизация


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true , parameterLimit:50000}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(connectToBase);


app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}))



app.use(function(req, res, next) {


	//console.log('in options');

  res.header('Access-Control-Allow-Origin', 'http://localhost');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Refresh,Content-Length, X-Requested-With');
  res.header('Access-Control-Expose-Headers','X-Content-Range');
  next();
});


app.set('view engine', 'pug')
app.use('/ajax/login', authRouter);

//TODO путь другой для



app.listen(8090, function () {
  //console.log('start')
})




/*
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


 */


module.exports = app;
