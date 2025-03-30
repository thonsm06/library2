const library = [];

function CreateBook(title, author, pages, id, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
    this.read = read;
}
CreateBook.prototype.toggleRead = function() {
    if (this.read === false) {
        this.read = true;
    } else {
        this.read = false;
    }
};

function addBookToLibrary(title, author, pages, id, read) {
    library.push(new CreateBook(title, author, pages, id, read));
}

//toggle status of array and display
function toggleStatus(bookDiv) {
    const status = bookDiv.getAttribute("value");
    if (status === false) {
        bookDiv.setAttribute("value", true);
        
    } else {
        bookDiv.setAttribute("value", false);
        
    }
}
function setReadStatus(bookDiv) {
    const status = bookDiv.getAttribute("value");   
    if (status === false) {
        book.textContent = "unread";
    } else {
        book.textContent = "read";
    }
}

const container = document.querySelector(".content-container");
container.addEventListener("click", (event) => {
    const target = event.target;
    switch(target) {
        //case: 
    }
    const bookIndexInLibrary = library.findIndex((book) => {
        return book.id === target.getAttribute("data-id");
    });
    if (bookIndexInLibrary !== -1) {
        library.splice(bookIndexInLibrary, 1);
        target.parentElement.remove();
    }
});

function displayBooks(library) {
    let i = 1; //track book being display
    const contents = document.querySelector(".content-container");
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
            const remove = document.createElement("button");
            remove.textContent = "Remove";
            remove.setAttribute("data-id", book.id);

            const read = document.createElement("div");
            read.classList.toggle(`read-${i}`);
            read.setAttribute("value", book.read);
            read.setAttribute("date-id", book.id);
            read.addEventListener("click", (event) => {
                //get array element
                //console.log(event.target.getAttribute("data-id"));
                const bookIndexInLibrary = library.indexOf(event.target.getAttribute("data-id"));
                library[bookIndexInLibrary].toggleRead();

                toggleStatus(event.target);
            })
            if (book.read === false) {
                read.style.backgroundColor = "gray";
                read.textContent = "unread";
            } else {
                read.style.backgroundColor = "green";
                read.textContent = "read";
            }
           
            bookCard.appendChild(title)
            bookCard.appendChild(author);
            bookCard.appendChild(pages);
            bookCard.appendChild(read);
            bookCard.appendChild(remove);
            
            contents.appendChild(bookCard);
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
    const id = crypto.randomUUID();
    const read = document.querySelector("#read").checked;
    
    addBookToLibrary(title, author, pages, id, read);
    displayBooks(library);
    event.preventDefault();
    console.log(library);
});


