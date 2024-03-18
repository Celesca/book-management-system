let bookLists = [
    { title: "Typescript Fundamental", author:"Suradej K.", year: 2023, price: 250},
    { title: "Angular Fundamental", author:"Malee Coconut", year: 2019, price: 150},
    { title: "Refactoring", author:"Martin Fowler", year: 2007, price: 350},
]

function validateBook(book) {

}

function bookInfoDto() {
    let title = prompt("Enter book title\t: ")
    let author = prompt("Enter book author\t: ")
    let year = prompt("Enter book year\t: ")
    let price = prompt("Enter book price\t: ")
    let book = {title, author, year, price}
}

function addBook(){

    if (validateBook(book)) {
        bookLists.push(book)
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
        let title = prompt("Enter book title\t: ")
        let author = prompt("Enter book author\t: ")
        let year = prompt("Enter book year\t: ")
        let price = prompt("Enter book price\t: ")

        let book = {title, author, year, price}
        if (validateBook(book)) {
            bookLists[targetBook - 1] = book
            console.log("Book edited")
        }
        else {
            console.log("Invalid book")
        }
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
            console.log("4. Delete book")
            break;
        case "5":
            console.log("5. Quit")
            break;
        default:
            console.log("Invalid command")
            break;
    }

}