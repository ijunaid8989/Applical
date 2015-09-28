var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

app
	.use(express.static(__dirname + '/public'))
	.use(bodyParser.json());

var id = 0;
var books = {};

books[id] = {
	_id : ++id,
	title : "What we talk when we talk about love",
	author : "Rymond Carver"
}

app.get('/books/:id', function(req,res){
	var id = parseInt(req.params.id, 10);

	res.json(books[id]);

});


app.post('/books', function(req,res){ 
	var book = req.body;

	book._id = ++id;
	books[book._id] = book;

	res.json(book);

});

app.put('/books/:id', function(req,res){
	var id = parseInt(req.params.id, 10);

	books[id] = req.body;

	res.json(books[id]);

});

app.delete('/books/:id',function(req,res){
	var id = parseInt(req.params.id, 0);

	delete books[id];

	res.json(null);

});


app
	.get('*', function(req,res){
		req.sendFile(__dirname + '/public/index.html');
	})
	.listen(3000);
