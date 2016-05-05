import '../../api/books/books';

Template.booksList.helpers({
   books: function () {
    const books = Books.find();

    // const books = Books.findOne({});
    // console.log('books: ' + books);

    if ( books ) {
      return books;
    }
  }
});
