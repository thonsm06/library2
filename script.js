const library = [];

function CreateBook(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
}

function addBookToLibrary(title, author) {
    let id = crypto.randomUUID();
    library.push(new CreateBook(title, author, id));

}

