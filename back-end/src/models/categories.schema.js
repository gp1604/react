const mongoose = require('mongoose')

const { Schema } = mongoose;

const Categories = new Schema({
    name: { type: String, unique: true },
})

module.exports = mongoose.model('Categories', Categories)