/**
 * Create an array of books containing different book.

    Use the includes method to check if the array contains a javascript book.

    Print a message to the console indicating whether the element is present in the array or not.
 */

    const books = ['Bangla', 'English', 'Math', 'Physics', 'Chemistry'];

    if(books.includes('English')){
        console.log('The element is present');
    }

    else{
        console.log('The element is not present');
    }