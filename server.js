var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    port = 8000,
    app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './client/static')));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port, function() {
    console.log("listening on port: ", port);
});

