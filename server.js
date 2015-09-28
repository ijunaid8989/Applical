var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

app
	.use(express.static(__dirname + "/public"))
	.use(bodyParser.json())
	.get('*', function(req, res){
		res.sendFile(__dirname + '/public/index.html')
	})
	.listen(3000);