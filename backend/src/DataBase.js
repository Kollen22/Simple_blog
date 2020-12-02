const mongoose = require('mongoose');

const News = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    news: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const news = mongoose.model('News', News);

module.exports = news;