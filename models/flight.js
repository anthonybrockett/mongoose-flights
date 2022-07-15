const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        // enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', ''],
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
            let d = `${new Date().getFullYear() + 1}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}`;
            d += `-${new Date().getDate().toString().padStart(2, '0')} ${new Date().toLocaleTimeString('en-US', {hour12: true}).slice(0, 5)}`;
            return d;
        }
    }
});

module.exports = mongoose.model('Flight', flightSchema);