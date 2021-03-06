'use strict';

var Priority = require('../models/priority');

exports.init = function(req, res){
  res.render('priorities/init');
};

exports.create = function(req, res){
  var priority = new Priority(req.body);
  priority.save(function(){
    res.redirect('/priorities');
  });
};

exports.index = function(req, res){
  Priority.findAll(function(priorities){
    res.render('priorities/index', {priorities:priorities});
  });
};
