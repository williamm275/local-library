// Using the find() method loop through the array of accounts
// Find the id value amongst our account objects that matches our id argument
function findAccountById(accounts, id) {
  const accountFound = accounts.find((account) => account.id === id);
  return accountFound;
}

// Using the sort() method sort array of accounts by last name
function sortAccountsByLastName(accounts) {
  const sortedAccounts = accounts.sort((accountA, accountB) => {
    // toUpperCase ignores upper and lowercase
    const lastNameA = accountA.name.last.toUpperCase();
    const lastNameB = accountB.name.last.toUpperCase();
    return lastNameA < lastNameB ? -1 : 1;
  });
  return sortedAccounts;
}

// Set counter variable
// Loop through books array then loop through the borrows array within the books array
// Check if the books borrows ID is equal to the account ID
// If yes accumulate our counter by 1 for each id match
function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (account.id === books[i].borrows[j].id) {
        totalBorrows++;
      }
    }
  }
  return totalBorrows;
}

//Declare a variable that will store the value of the final result in an empty array.
//Declare a variable that will store the value of the matching borrow object.
//Loop through the books array using the forEach method and loop through the borrows array using forEach
//Declare a variable for just the borrows object const borrowed = item.borrows.
//Destructure the book object.
//As we loop through the borrowed array check if borrow.id is equal to accountId and borrow.returned === false.
//If conditional is true push the book object into the result array and the borrows object to borrowsMatch array.
//Filter through the authors array to return one author object whose id matches.
function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  let borrowMatch = [];
  books.forEach((item) => {
    const borrowed = item.borrows;
    const book = {
      id: item.id,
      title: item.title,
      genre: item.genre,
      authorId: item.authorId,
      author: {},
      borrows: {},
    };
    const { id, title, genre, authorId, author, borrows } = book;

    borrowed.forEach((borrow) => {
      if (borrow.id === account.id && borrow.returned === false) {
        result.push(book);
        borrowMatch.push(borrow);
        book.borrows = borrowMatch;
        book.author = authors.filter((auth) => auth.id === book.authorId)[0];
      }
    });
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
