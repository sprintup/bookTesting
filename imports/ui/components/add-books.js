// Template.addBook.events({
//   'submit form': function ( event, template ) {
//     event.preventDefault();
//
//     const book = {
//       title: template.find( '[name="title"]' ).value.trim(),
//       author: template.find( '[name="author"]' ).value.trim()
//     };
//
//     console.log('book: '+book);
//
//     if ( book.title !== '' && book.author !== '' ) {
//       Meteor.call( 'Books.insert', book, ( error ) => {
//         if ( error ) {
//           alert( error.reason );
//         } else {
//           template.find( 'form' ).reset();
//         }
//       });
//     } else {
//       alert( 'Make sure to provide a title and author before adding a book.' );
//     }
//   }
// });


Template.addBook.events({
  '#add-book' ( event, template ) {
    console.log("here");

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
