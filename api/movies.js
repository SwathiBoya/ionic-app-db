var express = require('express');
var router = express.Router();
var dbService = require('../services/movieDBService');

router.get('/', function(req, res, next) {
  var callback = function(result){
    res.send(result);
  }
  dbService.getMovies(callback);
});

router.post('/', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var movie = req.body;
  dbService.addMovie(movie, callback);
});

router.delete('/:id', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var movieId = req.params.id;
  dbService.deleteMovie(movieId,callback);
});

router.get('/:id', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var movieId = req.params.id;
  var movie = dbService.getMovieById(movieId,callback);
});

router.put('/:id', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var movieId = req.params.id;
  var movie = req.body;
  dbService.updateCustomer(movie,callback);
});
module.exports = router;
