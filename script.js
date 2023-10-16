const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}
function removeBook(index){
    myLibrary.splice(index,1);
    render();
}
Book.prototype.toggleRead = function(){
    this.read = !this.read;
}
function toggleRead(index){
    myLibrary[index].toggleRead();
    render();
}

let newButton = document.querySelector('#new-book-btn');
newButton.addEventListener('click', openForm);

function openForm(){
    let newForm = document.querySelector('#new-book-form');
    newForm.setAttribute('style', 'display: block');
}
document.querySelector('#new-book-form').addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
})
function render(){
    let libraryBook = document.querySelector('#library');
    libraryBook.innerHTML = "";
    for(let i =0; i<myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML= `<div class = "book-card">
        <p class="book-title"> Book Title: ${book.title}</p>
        <p class="book-author">Author Name: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.read ? "Read" : "Not Read"}</p>
        <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
        <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle</button>
        </div>`
        libraryBook.appendChild(bookEl);
    }
}
