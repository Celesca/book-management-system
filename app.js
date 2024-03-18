let bookLists = [
    { title: "Typescript Fundamental", author:"Suradej K.", year: 2023, price: 250},
    { title: "Angular Fundamental", author:"Malee Coconut", year: 2019, price: 150},
    { title: "Refactoring", author:"Martin Fowler", year: 2007, price: 350},
]

function validateBook(book) {

}

function addBook(){
    let title = prompt("Enter book title: ")
    let author = prompt("Enter book author: ")
    let year = prompt("Enter book year: ")
    let price = prompt("Enter book price: ")

    let book = {title, author, year, price}
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

}

console.log("Welcome to Book Management System")


while (true) {
    let command = prompt("Enter command (1-4) : ")
    switch (command) {
        case "1":
            addBook()
            break;
        case "2":
            console.log("2. Add new book")
            break;
        case "3":
            console.log("3. Update book")
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