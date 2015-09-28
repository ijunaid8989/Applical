var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

app
	.use(express.static(__dirname + '/public'))
	.use(bodyParser.json());

var id = 0;
var books = {};
app.post('/books', function(req,res){
	var book = req.body;
	book.id = ++id;
	books[book.id] = book;
	res.json(book);
});


app
	.get('*', function(req,res){
		req.sendFile(__dirname + '/public/index.html');
	})
	.listen(3000);
