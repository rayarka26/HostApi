const mongoose = require('mongoose');

uri = "mongodb+srv://rayarka26:6doXCKLyLfOcJulE@cluster0.3fsu5vi.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectdb = () =>{
    // console.log("I am in");
    return mongoose.connect(uri,{
        useNewUrlParser : true,
        useUnifiedTopology: true,
    } );
};

module.exports = connectdb;