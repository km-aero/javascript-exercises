const getTheTitles = function(books) {
    // initiate array length and empty return array
    booksLength = books.length;
    console.log(booksLength); // check array length
    let bookTitles = [];

    /* Iterate through books list and push each
    elements title to empty array */
    for (let i = 0; i < booksLength; i++) {
        console.log(books[i].title); // check book titles being iterated through
        bookTitles.push(books[i].title);
    };
    
    // return array of titles
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
