const mongoose = require('mongoose');
const config = require('./config');

class Database {

    constructor(){
        this.connect();
    }

    connect() {
        // mongoose.connect('mongodb+srv://admin:$hM78xYgeNFJCXW@twitterclonecluster.mjkjyqx.mongodb.net/')
        mongoose.connect(config.mongoURI)
            .then(() => {
                console.log('database connection successful');
            }).catch((err) => {
                console.log("database connecting error" + err);
            })
    }
}

module.exports = new Database();