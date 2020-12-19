const mongoose = require('../Config/database');

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: 2000
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
});

module.exports = carSchema;