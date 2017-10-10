var mongoose = require('mongoose');
var Cat = mongoose.model('cats');
module.exports = {
  showAll: function(req, res) {
    Cat.find({}, function(err, results){
        if(err) { 
            console.log(err);
        } else {
            res.render('index', {cats: results});
        }
    });
  },
  editOne: function(req, res) {
    Cat.find({_id: req.params.id}, function(err, cat){
        if(err) { 
            console.log(err); 
        } else {
            console.log(cat);
            res.render('edit', {cat: cat});
        }
    });
  },
  findOne: function(req, res) {
    Cat.find({_id: req.params.id}, function(err, cat){
        if(err) { 
            console.log(err);
        } else {
            console.log(cat);
            res.render('show', {cat: cat});
        }
    });
  },
  create: function(req,res) {
    Cat.create(req.body, function(err){
        if(err) { 
            console.log(err); 
        } else {
            res.redirect('/');
        }
    });
  },
  update: function(req,res) {
    Cat.update({_id: req.params.id}, req.body, function(err){
        if(err) { 
            console.log("Show error", err); 
        } else {
            res.redirect('/');
        }
    });
  },
  delete: function(req,res) {
    Cat.remove({_id: req.params.id}, function(err){
        if(err) { 
            console.log("Remove error", err); 
        } else {
            res.redirect('/');
        }
    });
  }
}