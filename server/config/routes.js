var cats = require('../controllers/cats.js');

module.exports = function(app) {
    app.get('/', function(req, res){
        cats.showAll(req,res);
    });
    
    app.get('/cats/edit/:id', function(req, res){
        cats.editOne(req,res);
    });
    
    app.get('/cats/new', function(req, res){
        res.render('new');
    });
    
    app.get('/cats/:id', function(req, res){
        cats.findOne(req,res);
    });
    //create 
    app.post('/cats/new', function(req, res){
        cats.create(req,res);
    });
    //update
    app.post('/cats/:id', function(req, res){
        cats.update(req,res);
    });
    //delete
    app.post('/cats/destroy/:id', function(req, res){
        cats.delete(req,res);
    });
}