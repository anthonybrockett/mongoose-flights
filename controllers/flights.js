const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', { flight, tickets});
        })
        .sort('seat');
    })
};

function newFlight(req, res) {
    const newFlight = new Flight();
    // Obtain the default date
    const d = newFlight.departs;
    // Format the date for the value attribute of the input
    let departsDate = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${d.getDate().toString().padStart(2, '0')}T${d.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { departsDate });
}

function create(req, res) {
    for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
    };
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        res.redirect('/flights')
    })
}

function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', { flights })
    })
    .sort({departs: 1})
};
