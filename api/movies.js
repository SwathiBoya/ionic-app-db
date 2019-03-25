var express = require('express');
var router = express.Router();
var dbService = require('../services/movieDBService');

var movieList = [
  {id:1, moviename:'Bhahubhali', language:'Telugu', imageurl:'', productionhouse:'AAAA',ratiing:10,type:'Fantasy',releasedate:'12/1/2017'},
  {id:2, moviename:'Jersy', language:'Telugu', imageurl:'', productionhouse:'AAAA',ratiing:10,type:'Romantic',releasedate:'12/1/2017'},
  {id:3, moviename:'Arjun Suravaram', language:'Telugu', imageurl:'', productionhouse:'AAAA',ratiing:10,type:'Thriller',releasedate:'12/1/2017'}

];

router.get('/', function(req, res, next) {
  var callback = function(result){
    res.send(result);
  }
  dbService.getMovies(callback);
});

router.get('/:id', function(req, res, next) {
  res.send(movieList);
});

module.exports = router;
