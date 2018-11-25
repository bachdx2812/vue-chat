const express  = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const socket = require('socket.io')
const cors = require('cors')
const keys = require('./config/keys')

const message = require('./model/message')
const user = require('./model/user')
const conversation = require('./model/conversation')

const app = new express()
app.use(bodyParser.json())
app.use(cors())

// mongo
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
mongoose.connection.on('error', () => {
  console.log("Error in database connection")
})
mongoose.connection.once('open', () => {
  console.log("DB connection established")
})

const server = app.listen(3000, () => {
  console.log("Howdy, I am running at PORT 3000")
})

// socketio
let io = socket(server);

io.on("connection", function(socket) {
  console.log("Socket Connection Established with ID :"+ socket.id)
  socket.on("POST_MESSAGE", function(data){
    console.log(data);
    io.emit('MESSAGE', data.message);
  })
})


app.get('/chat', async (req,res) => {
  let result = await message.find()
  res.send(result);
})

app.get('/users', async (req, res) => {
  let result = await user.find()
  res.send(result);
})

app.get('/conversations', async (req, res) => {
  let result = await conversation.find()
  res.send(result);
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

