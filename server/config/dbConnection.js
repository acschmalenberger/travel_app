const mongoose = require('mongoose');
const config = require("./index.js");
mongoose.set("useCreateIndex", true);

const URI = config.mongoURI;

console.log(URI)
mongoose.connect(URI);

// When successfully connected
mongoose.connection.on('connected', () => {
    console.log('Established Mongoose Default Connection');
});

// When connection throws an error
mongoose.connection.on('error', err => {
    console.log('Mongoose Default Connection Error : ' + err);
});

