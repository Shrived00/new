const mongoose = require('mongoose');
mongoose.set('strictQuery', true);


const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,



        });

        console.log(`Mongo DB Connected:${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();

    }
};

module.exports = connectDB