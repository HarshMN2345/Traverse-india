const mongoose = require('mongoose');
const placeSchema = new mongoose.Schema({
    name: String,
    description: String,
    location: String,
    image: [String],
    price: Number,
    rating: Number,
    checkin: Date,
    checkout: Date,
});
const Place = mongoose.model('Place', placeSchema);
module.exports = Place;