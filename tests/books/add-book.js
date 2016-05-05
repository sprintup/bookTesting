describe( 'Add a Book', function() {
  it( 'should create a new book @watch', function() {
    // [...]

    var getBook = server.execute( function() {
      return Books.findOne( { title: 'Seeking Wisdom' } );
    });

    expect( getBook.title ).to.equal( 'Seeking Wisdom' );
  });

  // afterEach( [...] });
});
