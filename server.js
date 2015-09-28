// define express module

var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('*', function(req,res){
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);