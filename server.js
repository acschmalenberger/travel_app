
// ADD these
const express = require('express');
const cors = require('cors');
const userRoutes = require('./server/routes/users');
const authRoutes = require('./server/routes/auth');
const config = require('./server/config');
const cardRoutes = require('./server/routes/cards');


// DB connection
require('./server/config/dbConnection');

const app = express();

// middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// ADD routes
app.use('/', userRoutes);
app.use('/', authRoutes);
app.use('/cards', cardRoutes);

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: err.name + ':' + err.message });
  }
});

app.listen(config.port, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${config.port}!`);
});