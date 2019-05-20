var express = require('express');
var router = express.Router();
var dbService = require('../services/bookingDBService');


router.get('/', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  dbService.getBookings(callback);
});

router.get('/:id', function(req, res, next) {
  res.send({'result':result});
});
router.delete('/:id', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var bookingId = req.params.id;
  dbService.deleteBooking(bookingId,callback);
});

router.get('/:id', function(req, res, next) {
  var callback = function(booking){
    res.send(booking);
  }
  var bookingId = req.params.id;
  var booking = dbService.getBookingById(bookingId,callback);
});

router.put('/:id', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var bookingId = req.params.id;
  var booking = req.body;
  dbService.updateBooking(booking,callback);
});
module.exports = router;
