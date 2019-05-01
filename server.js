var express = require('express');
var app = express('path');

var path = require('path');

var app = express();

app.use(express.static(__dirname + '/angularapp'));

app.get('/*', function(req,res){

    res.sendFile(path.join(__dirname + '/angularapp/index.html'));

});

app.listen(process.env.PORT || 8080);