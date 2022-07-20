const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

function create(req, res) {
    Ticket.create(req.body, function(err, ticket) {
        ticket.flight = req.params.id;
        ticket.save(function(err) {
            res.redirect(`/flights/${req.params.id}`);
        })
        console.log(ticket)
    })
}

function newTicket(req, res) {
    Ticket.find({})
    //Sort tickets by their seat
    .sort('seat')
    .exec(function (err, tickets) {
      res.render(`tickets/new`,
        { tickets }
        );
    });
}
