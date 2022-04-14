const mongoose = require('mongoose');
const { stringify } = require('querystring');

const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: String,
    images: [String],
    price: Number,
    category: { type: Schema.Types.ObjectId, ref: 'Categories' },
    createAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('products', ProductSchema)