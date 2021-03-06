const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Destinations (subdocs) will be embedded inside of flight docs

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: {
        type: Date
    }
});

const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: function() {
            return `${new Date().getFullYear() + 1}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')} ${new Date().toTimeString().slice(0, 5)}`;      
        }
    },
    curDate: {
        type: Date,
        default: function() {
            return `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')} ${new Date().toTimeString().slice(0, 5)}`;      
        }
    },
    destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);