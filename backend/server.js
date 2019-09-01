var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var cors = require('cors')
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var bodyParser = require('body-parser')


app.use(cors())



// CORS PROTECTION
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', "access-control-allow-headers,access-control-allow-origin,content-type");

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// bodyparser middleware
app.use(bodyParser.urlencoded({ limit:'50mb', extended: false }));
app.use(bodyParser.json({limit: '50mb', extended: false}));

const saltRounds = 10;
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB connected')
  // we're connected!
});
mongoose.Promise = global.Promise;
require('./models/User')
const User = mongoose.model('users')

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
    console.log('a user connected');
    console.log(socket)
    socket.on('chat message', function(msg){
      console.log('message: ' + msg.message);
      io.emit('chat message', msg);
    });
    
  });


http.listen(3000, function(){
  console.log('listening on *:3000');
});

app.post('/signup', async function(req,res){
  console.log(req.body)
  var user = await User.findOne({username:req.body.username})
  if(user){
    res.send('already exists')
  }
  bcrypt.hash(req.body.password, saltRounds, async function (err,   hash) {
   var data = await User.create({
      username:req.body.username,
      password:hash
    })
    if(data){
      res.send('OK')
    }
  })
})

app.post('/login', async function(req,res){
  var user = await User.findOne({username:req.body.username})
  if(!user){
    res.send('No such user exists')
  }else{
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (result == true) {
          res.send(user)
      } else {
       res.send('Incorrect password');
      }
    });
  }
})