const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: name,
        unique: true,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Tablet', 'Capsule', 'Cream', 'Ointment', 'Skin Care', 'Supplies', 'Misc.']
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        required: true
    },
    rating: {
        type: Number,
        default: 0,
        required: true,
        min: 0
    },
    available: {
        type: Boolean,
        default: false,
        required: true
    },
    reviews: {
        type: Schema.ObjectId,
        required: true
    },
});

module.exports = mongoose.model('Product', productSchema);
