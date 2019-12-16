class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {

  addBook(book) {
    const bookList = document.getElementById('book-list');
    const tr = document.createElement('tr');

    bookList.appendChild(tr);
    tr.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td> `;
  }

  clearInput() {
    title.value = '';
    author.value = '';
    isbn.value = '';
  }

  anyMsg(mes, clas) {
    const parent = document.querySelector('.container');
    const form = document.getElementById('book-form');
    const div = document.createElement('div');

    div.className = `alert ${clas}`;
    div.textContent = mes;
    parent.insertBefore(div, form);

    setTimeout(() => {
      div.remove();
    }, 3000);  
  }

  removeBook(e) {
    e.target.parentElement.parentElement.remove();

    let books;

    books = JSON.parse(localStorage.getItem('books'));

    books.forEach(function(book, i) {
      
      if (e.target.parentElement.previousSibling.previousSibling.textContent == book.isbn) {
        books.splice(i, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }

  static localStore(book) {

    let books;

    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static LsOnLoad() {
    const books = JSON.parse(localStorage.getItem('books'));
    const ui = new UI();
    
    books.forEach(function(book) {
      ui.addBook(book);
    });
  }
}

window.addEventListener('DOMContentLoaded', function() {
  UI.LsOnLoad();
});

document.getElementById('submit').addEventListener('click', function(e) {
  e.preventDefault();

  const title = document.getElementById('title'),
        author = document.getElementById('author'),
        isbn = document.getElementById('isbn');

  const ui = new UI();

  if (title.value !== '' && author.value !== '' && isbn.value !== '') {
    const book = new Book(title.value, author.value, isbn.value);
    ui.addBook(book);
    ui.clearInput();
    ui.anyMsg('Книга добавлена', 'success');

    UI.localStore(book);
  } else {
    ui.anyMsg('Введите корректные данные', 'error');
  }

});

document.getElementById('book-list').addEventListener('click', function(e) {
  e.preventDefault();

  const ui = new UI();
  if (e.target.classList.contains('delete')) {
    ui.removeBook(e);
    ui.anyMsg('Книга удалена', 'success');
  }
});