const config = {
    port: process.env.PORT || 3001,
    jwtSecret: process.env.JWT_SECRET || 'mkT23j#u!45',
    mongoURI: process.env.MONGODB_URI || 'mongodb://localhost/mern-auth'

};

module.exports = config;
