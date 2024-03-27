let bookLists = [
    { title: "Typescript Fundamental", author:"Suradej K.", year: 2023, price: 250},
    { title: "Angular Fundamental", author:"Malee Coconut", year: 2019, price: 150},
    { title: "Refactoring", author:"Martin Fowler", year: 2007, price: 350},
]

function validateBook(book) {
    if (book.year <= 1000 || book.year > 2024 || !book.year) {
        alert("Invalid year")
        return false
    }
    if (book.price < 0 || !book.price) {
        alert("Invalid price")
        return false
    }
    if (!book.title || !book.author) {
        alert("Invalid title or author")
        return false
    }
    return true
}

function displayBook(book) {
    console.log(`
    Title:     ${book.title}, 
    Author:    ${book.author}, 
    Year:      ${book.year}, 
    Price:     ${book.price}`
  )
}

function enterBookInfo() {
    let title = prompt("Enter book title: ")
    let author = prompt("Enter book author: ")
    let year = parseInt(prompt("Enter book year: "))
    let price = parseInt(prompt("Enter book price: "))
    let book = {title, author, year, price}
    return book
}

function addBook(){

    let newBook = enterBookInfo()

    if (validateBook(newBook)) {
        bookLists.push(newBook)
        displayBook(newBook)
        alert("Book added")
    }
    else {
        alert("Book cannot be added")
    }
    console.log("\n---------------------")
}

function viewBooks() {
    console.log("\n--- List of books ---")
    bookLists.forEach((book, index) => {
        console.log(`#${index + 1}:`)
        displayBook(book)
    }) 
    console.log("\n---------------------")
}

function editBook(){
    const targetBook = prompt("Enter book number to edit: ")
    if (targetBook > 0 && targetBook <= bookLists.length) {
        let book = enterBookInfo()

        if (validateBook(book)) {
            bookLists[targetBook - 1] = book
            alert("Book edited")
            displayBook(book)
        }
        else {
            alert("Book cannot be edited")
        }
    } else {
        alert("Invalid book number")
    }
    console.log("\n---------------------")
}

function deleteBook() {
    const targetBook = prompt("Enter book number to delete: ")
    if (targetBook > 0 && targetBook <= bookLists.length) {
        bookLists.splice(targetBook - 1, 1)
        alert("Book number " + targetBook + " has been deleted.")
    } else {
        alert("Invalid book number")
    }
    console.log("\n---------------------")
}

function startProgram(){
    console.log("Welcome to Book Management System")
    let running = true;
    while (running) {
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
                alert("See you again!")
                running = false
                break;
            default:
                alert("Invalid command")
                running = false
                break;
        }

    }

}