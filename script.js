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

addBookToLibrary("LotR", "Tokien", "1000");

function displayBooks(library) {
    for (book of library) {
        const div = document.createElement("div");
        // div.classList.add("book container");
        const title = document.createElement("h2");
        title.textContent = book.title;
        const author = document.createElement("p");
        author.textContent = book.author;
        const pages = document.createElement("p");
        pages.textContent = book.pages;
        div.appendChild(title)
        div.appendChild(author);
        div.appendChild(pages);
        document.body.appendChild(div);
        
    }
}

displayBooks(library);