Feature: Add a Book

  As a human
  I want to add a book to a list
  So I can recall it later

  @watch
  Scenario: Add a new book
    Given I have added a book
    Then I see "Seeking Wisdom" in the Books collection
