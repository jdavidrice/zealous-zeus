require('dotenv').config();
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const routes = require('./routes');

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static(__dirname));
server.use(routes);

if (process.env.NODE_ENV === 'production') {
  server.use(express.static('client/build'));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/zealous_zues',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log(
    'Mongoose default connection open to ' +
      'mongodb://localhost:27017/zealous_zues'
  );
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

const PORT = process.env.BACKEND_PORT || 3300;
server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is listening at http://localhost:${PORT}`);
  }
});
