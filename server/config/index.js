const config = {
    port: process.env.PORT || 3001,
    jwtSecret: process.env.JWT_SECRET || 'mkT23j#u!45',
    mongoURI: process.env.MONGODB_URI ||  "mongodb://user:password1@ds161890.mlab.com:61890/heroku_f09vkw6c"

};

module.exports = config;
