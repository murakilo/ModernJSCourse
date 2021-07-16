// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() { }

UI.prototype.addBookToList = function(book) {
  console.log(book);
  var list = document.getElementById("book-list");
  // create tr element
  const row = document.createElement("tr");
  row.innerHTML= `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#">X</a></td>
  `;
  list.appendChild(row);
}

UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
  // OR
  //document.getElementById('book-form').reset();
}

UI.prototype.showAlert = function(book, status) {
  // create alert element
  const div = document.createElement('div');
  div.className = `alert ${status}`;
  if (status === 'error') {
    div.appendChild(document.createTextNode(`Unable to add book. Fill out all fields.`));
  } else {
    div.appendChild(document.createTextNode(`$Book added: ${book.title}`));
  }
  const parent = document.querySelector('.container');
  const form = document.querySelector('#book-form');

  parent.insertBefore(div, form);

  // timeout
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000)
}

// Event listeners
document.getElementById("book-form").addEventListener('submit', function(e) {
  // get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  const book = new Book(title, author, isbn);
  const ui = new UI(book);

  // validate input
  if (!title || !author || !isbn) {
    // error show
    ui.showAlert(book, 'error');
  } else {
    // add book to list
    ui.addBookToList(book);
    // clear fields
    ui.clearFields();
    // show success
    ui.showAlert(book, 'success');
  }

  e.preventDefault();
})