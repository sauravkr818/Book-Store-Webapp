const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
    },
    image: {
        type: String,
        required: true,
    },
    views: {
        type: String,
        required: true,
    },
    loves: {
        type: String,
        required: true,
    },
    genres: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Books', bookSchema)