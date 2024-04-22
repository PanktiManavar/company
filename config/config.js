const mongooes = require('mongoose');


const connectdb = async () => {
    try {
        await mongooes.connect('mongodb://localhost:27017/user_details');
        console.log("connect database");
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectdb;