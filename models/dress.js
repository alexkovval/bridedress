const mongoose = require('mongoose');
const Schema = mongoose.Schema

const DressSchema = Schema({
    dressNumber: {
        type: Number,
        required: true
    },
    photo1: {
        type: String,
        required: true
    },
    photo2: {
        type: String,
        required: true
    },
    photo3: {
        type: String,
        required: true
    },
    photo4: {
        type: String,
        required: true
    },
    photo5: {
        type: String,
        required: true
    },
    photo6: {
        type: String,
        required: true
    }

});

const Dress = module.exports = mongoose.model('dresses', DressSchema);
