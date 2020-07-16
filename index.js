
// ADD these
const express = require('express');
const cors = require('cors');
const userRoutes = require('./server/routes/users');
const authRoutes = require('./server/routes/auth');
const config = require('./server/config');


// DB connection
require('./server/config/dbConnection');

const app = express();

// middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ADD routes
app.use('/', userRoutes);
app.use('/', authRoutes);

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: err.name + ':' + err.message });
  }
});

app.listen(config.port, () => {
  console.log(`Listening at port ${config.port}`);
});