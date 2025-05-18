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

function renderBook() {
    myLibary.forEach(book => {
        console.log(book)
    });
}
