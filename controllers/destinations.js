const Flight = require('../models/flight');

module.exports = {
    create
}

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.destinations.sort(function(destA, destB) {
            return destA.arrival - destB.arrival;
        });
        console.log(flight.destinations);
        flight.save(function(err) {
            res.redirect(`/flights/${flight.id}`);
        });
    });
};