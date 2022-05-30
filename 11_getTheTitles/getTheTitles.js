const getTheTitles = function(books) {
    // initiate array length and empty return array
    booksLength = books.length;
    let bookTitles = [];

    /* Iterate through books list and push each
    elements title to empty array */
    for (let i = 0; i < booksLength; i++) {
        bookTitles.push(books[i].title);
    };
    
    // return array of titles
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
