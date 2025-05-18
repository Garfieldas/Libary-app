const openBtn = document.getElementById('modalBtn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

openBtn.onclick = () => {
    modal.style.display = 'block';
}

closeBtn.onclick = () => {
    modal.style.display = 'none';
}

const myLibary = [];

function Book(title, author, pages, status) {
    
    this.id = crypto.randomUUID
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibary(title, author, pages, status)
{
    const newBook = new Book(title,author,pages,status)
    myLibary.push(newBook)
    renderBook()
}

addBookToLibary('Tom', 'Jerry', 100, false)
addBookToLibary('Tom2', 'Jerry2', 101, false)
addBookToLibary('Tom3', 'Jerry3', 102, true)


function renderBook() {
    console.clear()
    myLibary.forEach(book => {
        console.log(book)
    });
}
