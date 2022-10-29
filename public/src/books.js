// Use the find() method to loop through authors array and search for the author where author.id === id;
// Return the author object where author.id === id is true.
function findAuthorById(authors, id) {
  const foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor;
}

// Use the find() method to loop through books array and search for the book where book.id === id;
// Return the book object where book.id === id is true.
function findBookById(books, id) {
  const foundBook = books.find((book) => book.id === id);
  return foundBook;
}

// Loop through books array to find whether a book has been returned or not
// Filter books that have been returned into an array
// Filter books that have not been returned into an array
// Join our two filtered arrays using the spread operator
// Return new array
function partitionBooksByBorrowedStatus(books) {
  /* Within the filter method we will use a helper function with the .some() method that will check if our condition
  is true within the borrow array. */
  const borrowedBooks = books.filter((book) =>
    book.borrows.some((borrow) => borrow.returned === false)
  );
  /* Within the filter method we will use a helper function with the every method that will check if our condition
  is true within the borrow array. */
  const returnedBooks = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned === true)
  );
  let filteredArray = [[...borrowedBooks], [...returnedBooks]];
  return filteredArray;
}

// Use the map() method to loop through the borrows array of the book object.
// Use the find() method within the map method to loop through the accounts array.
// Pass in an anonymous function as the callback function that takes in each account and finds the account where account.id === borrow.id
// Return the spread operator that contains the output values of the map method as borrow and the account variable.
// Use the slice method on the output array to return only the portion of the array up to index value 10 of the returned array.
function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((borrow) => {
      let account = accounts.find((account) => account.id === borrow.id);
      return { ...borrow, ...account };
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
