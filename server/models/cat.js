// require mongoose
var mongoose = require('mongoose');
// create the schema
var CatSchema = new mongoose.Schema({
    name: String,
    image: String,
    treat: String,
    }, {timestamps: true});
// register the schema as a model
var Cat = mongoose.model('cats', CatSchema);