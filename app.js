let bookLists = [
    { title: "Typescript Fundamental", author:"Suradej K.", year: 2023, price: 250},
    { title: "Angular Fundamental", author:"Malee Coconut", year: 2019, price: 150},
    { title: "Refactoring", author:"Martin Fowler", year: 2007, price: 350},
]

function validateBook(book) {
    if (book.title && book.author && book.year && book.price) {
        if (book.year > 2023 || book.year < 1000) {
            console.log("Invalid year")
            return false
        }
        if (book.price < 0) {
            console.log("Invalid price")
            return false
        }
        return true
    }
    else {
        console.log("Invalid book")
        return false
    }
}

function enterBookInfo() {
    let title = prompt("Enter book title\t: ")
    let author = prompt("Enter book author\t: ")
    let year = prompt("Enter book year\t: ")
    let price = prompt("Enter book price\t: ")
    let book = {title, author, year, price}
    return book
}

function addBook(){

    let newBook = enterBookInfo()

    if (validateBook(newBook)) {
        bookLists.push(newBook)
        console.log("Book added")
    }
    else {
        console.log("Invalid book")
    }
}

function viewBooks() {
    console.log("\n--- List of books ---")
    bookLists.forEach((book, index) => {
        console.log(`#${index + 1}:
                     Title:     ${book.title}, 
                     Author:    ${book.author}, 
                     Year:      ${book.year}, 
                     Price:     ${book.price}`
                   )
    }) 
}

function editBook(){
    const targetBook = prompt("Enter book number to edit: ")
    if (targetBook > 0 && targetBook <= bookLists.length) {
        let book = enterBookInfo()
        if (validateBook(book)) {
            bookLists[targetBook - 1] = book
            console.log("Book edited")
        }
        else {
            console.log("Invalid book")
        }
    } else {
        console.log("Invalid book number")
    }
}

function deleteBook() {
    const targetBook = prompt("Enter book number to delete: ")
    if (targetBook > 0 && targetBook <= bookLists.length) {
        bookLists.splice(targetBook - 1, 1)
        console.log("Book deleted")
    } else {
        console.log("Invalid book number")
    }
}

console.log("Welcome to Book Management System")
while (true) {
    console.log("Commands : ")
    console.log("1. View books")
    console.log("2. Add new book")
    console.log("3. Edit book")
    console.log("4. Delete book")
    console.log("5. Quit")
    let command = prompt("Enter command (1-4) : ")
    switch (command) {
        case "1":
            viewBooks()
            break;
        case "2":
            addBook()
            break;
        case "3":
            editBook()
            break;
        case "4":
            deleteBook()
            break;
        case "5":
            console.log("See you again!")
            break;
        default:
            console.log("Invalid command")
            break;
    }

}