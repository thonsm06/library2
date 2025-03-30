const library = [];

function CreateBook(title, author, pages, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
}

function addBookToLibrary(title, author, pages) {
    const id = crypto.randomUUID();
    library.push(new CreateBook(title, author, pages, id));

}

function displayBooks(library) {
    let i = 1; //track book being display
    for (book of library) {
        let bookCard = document.querySelector(`.book-card-${i}`);
        if (bookCard === null) { //if book has not been displayed
            bookCard = document.createElement("div");
            bookCard.classList.toggle(`book-card-${i}`);
            const title = document.createElement("h2");
            title.textContent = book.title;
            const author = document.createElement("p");
            author.textContent = book.author;
            const pages = document.createElement("p");
            pages.textContent = book.pages;
            bookCard.appendChild(title)
            bookCard.appendChild(author);
            bookCard.appendChild(pages);
            document.body.appendChild(bookCard);
        }
        i++
    }
}

displayBooks(library);


const add = document.querySelector(".add-button");
add.addEventListener("click", (event) => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    addBookToLibrary(title, author, pages);
    displayBooks(library);
    event.preventDefault();
});