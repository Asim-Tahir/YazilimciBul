var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* App Routers */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var developersRouter = require('./routes/developers');
var managersRouter = require('./routes/managers');
var educationsRouter = require('./routes/educations');
var projectsRouter = require('./routes/projects');
var jobsRouter = require('./routes/jobs');
var awardsRouter = require('./routes/awards');
var mytestRouter = require('./routes/mytest');

var cors = require("cors");

const db = require("./helper/db")();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/developers', developersRouter);
app.use('/managers', managersRouter);
app.use('/educations', educationsRouter);
app.use('/projects', projectsRouter);
app.use('/jobs', jobsRouter);
app.use('/awards', awardsRouter);
app.use('/mytest', mytestRouter);

// catch 404 and forward to error handler
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

module.exports = app;
