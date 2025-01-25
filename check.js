// This is a check folder wether I can commit any repo directly or not into github

const myBookList = {
    book1:
    {
        id: 456,
        name: "Rich Dad Poor Dad",
        price: 500
    },
    book2:
    {
        id: 466,
        name: "Rich Dad Poor Dad",
        price: 500
    }
 }


 // Logical Observation:

// If you have a small number of books, storing them as individual properties like book1, book2, etc., is fine.
// However, if the number of books increases or is dynamic, this approach is not scalable. In such cases, it would be better to use an array to store the books.


const myBookListInArray = {
    book1:[
    {
        id: 456,
        name: "Rich Dad Poor Dad",
        price: 500
    },
    {
        id: 466,
        name: "Rich Dad Poor Dad",
        price: 500
    }

    ]
}


// Advantages of Using an Array:
// You can dynamically add or remove books without needing to create new properties (book1, book2, etc.).
// It is easier to loop through the books to perform operations like displaying all book details or filtering by price.