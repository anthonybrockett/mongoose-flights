const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        let flightId = req.params.id;
        Ticket.create(req.body, function(err, ticket) {
            ticket.flight = flightId;
            ticket.save(function(err) {
                res.redirect(`/flights/${ticket.flight}`);
            })
        })
    })
}


function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({})
        //Sort tickets by their seat
        .sort('seat')
        .exec(function (err, tickets) {
        res.render(`tickets/new`,
            { tickets, flight }
            );
        });
    })
}    
