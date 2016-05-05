Template.addBook.events({
  'submit form' ( event, template ) {
    console.log('does this work?');
    event.preventDefault();

    const book = {
      title: template.find( '[name="title"]' ).value.trim(),
      author: template.find( '[name="author"]' ).value.trim()
    };

    if ( book.title !== '' && book.author !== '' ) {
      Meteor.call( 'Books.insert', book, ( error ) => {
        if ( error ) {
          alert( error.reason );
        } else {
          template.find( 'form' ).reset();
        }
      });
    } else {
      alert( 'Make sure to provide a title and author before adding a book.' );
    }
  }
});
