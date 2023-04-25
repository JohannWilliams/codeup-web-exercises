(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Johann",
        lastName: "Williams"
    };

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function (){
        return `Hello from ${this.firstName} ${this.lastName}`;
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper){
        let discount = 0;
        if(shopper.amount > 200){
            discount = 12;
        }
        console.log(`${shopper.name}, your initial price was $${shopper.amount.toFixed(2)}. Your discount is ${discount}%. Your final due is $${(shopper.amount - ((discount/100)*shopper.amount)).toFixed(2)}`);
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // let books = [
    // {
    //     title : "Yeah",
    //     author : {
    //         firstName: "John",
    //         lastName: "Doe"
    //     }
    // },
    // {
    //     title : "Boy",
    //     author : {
    //         firstName: "Doe",
    //         lastName:  "John"
    //     }
    // },
    // {
    //     title : "The Man Who Cried Mommy!!!",
    //     author : {
    //         firstName: "Jan",
    //         lastName:  "Smith"
    //     }
    // },
    // {
    //     title : "Boy Girl, Fire Water",
    //     author : {
    //         firstName: "Moby",
    //         lastName:  "Deck"
    //     }
    // },
    // {
    //     title : "Run Home Jack!",
    //     author : {
    //         firstName: "Mr.",
    //         lastName:  "Sme"
    //     }
    // }]

    // console.log(books[0].title) // "Yeah"
    // console.log(books[0].author.firstName) // "John"
    // console.log(books[0].author.lastName) // "Doe"

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // books.forEach(function (book, index){
    //     console.log(`Book # ${index+1}\nTitle: ${book.title}\nAuthor: ${book.author.firstName} ${book.author.lastName}\n---`);
    // });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    // let titlesArr = ["Yeah", "Boy", "The Man Who Cried Mommy!!!", "Boy Girl, Fire Water", "Run Home Jack!"];
    // let firstNamesArr = ["John", "Doe", "Jan", "Moby", "Mr"];
    // let lastNamesArr = ["Doe", "John", "Smith", "Deck", "Sme"];
    // function createBook(title, author){
    //     let book = {
    //         title: title,
    //         author: {
    //             firstName: author.firstName,
    //             lastName: author.lastName
    //         }
    //     };
    //     return book;
    // }
    //
    // let newBooksArr1 = []
    //
    // for(let i = 0; i < titlesArr.length; i++){
    //     let author = {
    //         firstName: firstNamesArr[i],
    //         lastName: lastNamesArr[i]
    //     }
    //     newBooksArr1.push(createBook(titlesArr[i], author))
    // }
    //
    // function showBookInfo(book){
    //     console.log(`Book # ${newBooksArr1.indexOf(book) + 1}\nTitle: ${book.title}\nAuthor: ${book.author.firstName} ${book.author.lastName}\n---`);
    // }
    //
    // for(let i = 0; i < newBooksArr1.length; i++){
    //     showBookInfo(newBooksArr1[i]);
    // }

    /**
     * Refactoing my books problem to use classes to creat the objects
     * Class of book
     * Class of authors
     */

    class Author {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        get getAuthorFirstName(){
            return this.firstName;
        }
        get getAuthorLastName(){
            return this.lastName;
        }
        set setAuthorFirstName(name){
            this.firstName = name;
        }
        set setAuthorLastName(name){
            this.lastName = name
        }
    }

    class Book {
        constructor(title, author) {
            this.title = title;
            this.author = author;
        }
        get getBookInfo(){
            return "Title: " + this.title + "\nAuthor: " + this.author.getAuthorFirstName + " " + this.author.getAuthorLastName + "\n---"
        }

        get firstName(){
            return this.author.firstName;
        }

        get lastName(){
            return this.author.lastName;
        }
        set setBookTitle(title){
            this.title = title;
        }
        set setBookAuthor(author){
            this.author = author;
        }
    }

    /**
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     */

    let books = [];

    let titlesArr = ["Yeah", "Boy", "The Man Who Cried Mommy!!!", "Boy Girl, Fire Water", "Run Home Jack!"];
    let firstNamesArr = ["John", "Doe", "Jan", "Moby", "Mr"];
    let lastNamesArr = ["Doe", "John", "Smith", "Deck", "Sme"];

    for(let i = 0; i < titlesArr.length; i++){
        let newAuthor = new Author(firstNamesArr[i], lastNamesArr[i]);
        let newBook = new Book(titlesArr[i], newAuthor);
        books.push(newBook);
    }

    console.log(books[0].title) // "Yeah"
    console.log(books[0].firstName) // "John"
    console.log(books[0].lastName) // "Doe"


    /**
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     */

    books.forEach(function (book, index){
        console.log("Book # " + (index + 1) + "\n" + book.getBookInfo);
    });

    /**
     * Bonus:
     * - Create a function named `createBook`
     * - Create a function named `showBookInfo`
     */

    function createBook(title, author){
        let newBook = new Book()
        newBook.setBookTitle = title;
        newBook.setBookAuthor = author;
        return newBook;
    }

    function showBookInfo(book){
        console.log("Book # " + (newBooksArr.indexOf(book) + 1) + "\n" + book.getBookInfo);
    }

    let newTitleList = ["New Book 1", "My Book is the Best. Part 2", "Dime a... You Know!"];
    let newAuthorList = [["New", "Brooks"],["Fun", "Dave"],["Quarter", "Nickel"]];

    let newBooksArr = [];
    for(let i = 0; i < newTitleList.length && i < newAuthorList.length; i++){
        let j = 0
        newBooksArr.push(createBook(newTitleList[i], new Author(newAuthorList[i][j], newAuthorList[i][j+1])))
    }

    newBooksArr.forEach(function (book, index){
        showBookInfo(book);
    });

})();