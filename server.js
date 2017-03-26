var express        = require('express'),
    app            = express(),
    morgan	       = require('morgan'),
    path           = require('path'),
    cookieParser   = require('cookie-parser'),
    bodyParser     = require('body-parser'),
    router         = express.Router(),
    mongoose       = require('mongoose'),
    methodOverride = require('method-override');

mongoose.connect( process.env.MONGODB_URI || "mongodb://macaframa:Dalo2555@ds045795.mlab.com:45795/garagesailors");

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain)
app.use(express.static(__dirname + 'public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride());

// var Schema = mongoose.Schema;
// // name the object that you want to send to your server
// var nameSchema = new Schema({
//         name: String,
//         price: String,
//         poi: Array,
//         info: Array,
//         img: Object
//     }, {
//     versionKey: false
// });

// // same naming convention for the object you want to send to the server
// var Name = mongoose.model('Name', nameSchema);

// app.get('/api/name', function(req, res, next){
//     name.find(function(err, name){
//         if(err){
//             res.send(err);
//         }
//         res.json(name);
//         });
// });

// app.post('/api/name', function(req, res, next){
//         name.create({
//         name: req.body.name,
//         price: req.body.price,
//         poi: req.body.poi,
//         info: req.body.info,
//         img: req.body.img
//     }, function(err, name){
//     if(err){
//         res.send(err);
//     }
//     res.json(name);
//     });
// });

// app.delete('/api/name/:name_id', function(req, res, next){
//     name.remove({
//         _id: req.params.name_id
//     }, function(err, name){
//         if(err){
//             res.send(err);
//         }
//         res.json(name);
//     });
// });

app.get('*', function(req, res){
	res.sendfile('index.html');
})

app.listen(process.env.PORT || 3000);