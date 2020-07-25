const mongoose = require('mongoose');

//Booking Schema
const BookingSchema = new mongoose.Schema({
    CheckIn: String,
    CheckOut: String,
    Adults: Number,
    Kids: Number,
    Date: {
        type: Date,
        default: Date.now()
    }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports=Booking;