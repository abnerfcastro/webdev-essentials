
// The map() method creates a new array with the results of calling a provided function on every element in this array.
// map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results. callback is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).

// callback is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.
(function() {

    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var elements = ["Water", "Fire", "Earth", "Air"];
    var books = [
        {
            title: "The Lightning Thief",
            author: "Rick Riordan",
            category: ["book", "hardcover"],
            quantity: 20,
            price: 15.20 
        },
        {
            title: "Sophie's World : The Greek Philosophers",
            author: "Jostein Gaarder",
            category: ["book", "paperback"],
            quantity: 0,
            price: 20.00 
        },
        {
            title: "Lucene in Action, Second Edition",
            author: "Michael McCandlessn",
            category: ["book", "paperback"],
            quantity: 6,
            price: 10.00 
        },
        {
            title: "Chronicles of Narnia",
            author: "C.S. Lewis",
            category: ["book", "hardcover"],
            quantity: 5,
            price: 14.60
        }
    ]

    var sqrts = numbers.map(x => {
        return Math.pow(x, 2);
    });
    console.log(sqrts);

    // Add property 'inStock' to each book object based on their quantity property
    books = books.map(book => {
        if (book.quantity > 0)
            book.inStock = true;
        else
            book.inStock = false;
        return book;
    });

    // All 'paperback' books are 10% OFF | SALE!!!
    // Adjust prices and add a property 'onSale' for those books
    var newPrices = books.map(book => {
        if (book.category.some(elem => { return elem == 'paperback'})) {
            book.price *= (1.00 - 0.10);
            book.onSale = true;
        }
        return book;
    });

    // Now what are the items on sale?
    console.log("Books on sale, 10% OFF!");
    newPrices.forEach(elem => {
        if (elem.onSale)
            console.log(elem.title, "by", elem.author, "only R$", elem.price);
    });

})();