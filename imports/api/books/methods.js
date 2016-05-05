import './books';

Meteor.methods({

  'Books.insert' ( book ) {
    console.log("what's happening book: "+book);
    Books.insert( book, ( error ) => {
      if ( error ) {
        console.log( error );
      }
    });
  }
});
