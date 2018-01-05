var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup

app.set('view engine', 'ejs');





// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.use('/',express.static(path.join(__dirname, '/zynappse/build')));

console.log('static file is: ',path.join(__dirname, '/zynappse/build'));

// app.use('/', index);
// app.use('/users', users);

app.use('*',function(req,res,next){
  res.render('index')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

let httpServer;
if (process.env.NODE_ENV === 'development') {
  httpServer = require('http').createServer(app);
} else {
  let fs = require('fs');
  let options = {
    ca: fs.readFileSync(process.env.CA),
    key: fs.readFileSync(process.env.KEY),
    cert: fs.readFileSync(process.env.CERT)
  };
  if (process.env.PROTOCOL === 'https') {
    httpServer = require('https').createServer(options, app);
  } else {
    httpServer = require('http').createServer(app);
  }
}

let port = process.env.PORT || 3000;
httpServer.listen(port, function() {
  console.log(`server is running at port ${port}`)
});

//module.exports = app;
