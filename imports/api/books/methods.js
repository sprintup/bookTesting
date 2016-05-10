import './books';

Meteor.methods({
  'Books.insert' ( book ) {
    Books.insert( book, ( error ) => {
      if ( error ) {
        console.log( error );
      }
    });
  }
});
