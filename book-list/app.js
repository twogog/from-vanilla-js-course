function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI() {}

UI.prototype.addBook = function(book) {
  const bookList = document.getElementById('book-list');
  const tr = document.createElement('tr');

  bookList.appendChild(tr);
  tr.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="delete">X</a></td> `;
};

UI.prototype.clearInput = function() {
  title.value = '';
  author.value = '';
  isbn.value = '';
};

UI.prototype.anyMsg = function(mes, clas) {
  const parent = document.querySelector('.container');
  const form = document.getElementById('book-form');
  const div = document.createElement('div');

  div.className = `alert ${clas}`;
  div.textContent = mes;
  parent.insertBefore(div, form);

  setTimeout(() => {
    div.remove();
  }, 3000);
};

UI.prototype.removeBook = function(e) {
  
  e.target.parentElement.parentElement.remove();
};




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