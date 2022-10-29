// Create a counter variable
// Using for/in loop through the books array and accumulate counter variable for each book
function getTotalBooksCount(books) {
  let bookCount = 0;
  for (const book in books) {
    bookCount++;
  }
  return bookCount;
}

// Create a counter variable
// Using for/in loop through the accounts array and accumulate counter variable for each account
function getTotalAccountsCount(accounts) {
  accountCount = 0;
  for (const account in accounts) {
    accountCount++;
  }
  return accountCount;
}

// Create a counter variable
// Using forEach() method loop through the books array and find the borrows array
// Using forEach() method loop through borrows array to accumulate counter variable
function getBooksBorrowedCount(books) {
  let booksBorrowedCount = 0;
  books.forEach((book) => {
    const borrowed = book.borrows;
    borrowed.forEach((borrow) => {
      if (borrow.returned === false) {
        booksBorrowedCount++;
      }
    });
  });
  return booksBorrowedCount;
}

// First we need to loop over the books array and count the number of times each genre shows up storing these results in an array
// If there is a genre in the map then add 1
// If there isn't a genre in the map then set the key and value to one
// Map the Object entries and return them with name and count
// Sort the array so the most common comes first
function getMostCommonGenres(books) {
  let map = {};
  books.forEach((num) => {
    if (map[num.genre]) {
      map[num.genre]++;
    } else {
      map[num.genre] = 1;
    }
  });
  return Object.entries(map)
    .map(([name, count]) => {
      return {
        name,
        count,
      };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function getMostPopularBooks(books) {
  return books
    .map((book) => {
      return { name: book.title, count: book.borrows.length };
    })
    .sort((a, b) => (a.count < b.count ? 1 : -1))
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let theAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        theAuthor.count += book.borrows.length;
      }
    });
    result.push(theAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
