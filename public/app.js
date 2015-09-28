var Book = Backbone.Model.extend({
	urlRoot : '/books',
	idAttribute : '_id'
});

var Books = Backbone.Collection.extend({
	model : Book,
	url : '/books'
});


var books = new Books();


books.add({author : "Junaid Farooq", title : "Love Chicken Khurana"});
books.add({author : "Affan Junaid", title : "Love in Sahiwal"});
books.add({author : "Addel Rauf", title : "Stories of Comsates"});
books.add({author : "Shakeel Rauf", title : "lets Dance over world"});
books.add({author : "Love guru", title : "Love Oveerr tick tok"});

var BookView = Backbone.View.extend({
	template : _.template($("#BookShow").html()),
	tagName : "li",
	render : function(){
		this.$el.html(this.template( this.model.toJSON() ));
		return this;
	}
});

var BooksView = Backbone.View.extend({

	template : _.template($("#BooksShow").html()),
	//tagName : "ul",
	render : function(){
		this.$el.html( this.template(this.collection) );
		var ul = this.$('ul');
		this.collection.each(function(model){
			var bookView = new BookView ({
				model : model
			});
			ul.append(bookView.render().el);
		});
		return this;
	}
});

var booksView = new BooksView({
	collection : books
});

$(".container").append(booksView.render().el);