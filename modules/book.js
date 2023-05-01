/* eslint-disable import/prefer-default-export */
const list = document.querySelector('#list');
const add = document.querySelector('.button');
let books = JSON.parse(localStorage.getItem('new-list')) || [
  {
    title: 'Faust',
    author: 'Goethe',
    id: 0,
  },
  {
    title: 'For Whom the Bell Tolls',
    author: 'Ernest Hemingway',
    id: 1,
  },
  {
    title: 'Old Man and the Sea',
    author: 'Ernest Hemingway',
    id: 2,
  },
];

class NewBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = books.length;
  }

  static renderBooks= () => {
    localStorage.setItem('new-list', JSON.stringify(books));
    list.innerHTML = '';
    books.forEach((book, index) => {
      list.innerHTML += ` 
    <div id="boi${index}" class='one-book-list'>
    <p> "${book.title}" by <i>  ${book.author} </i> </p>
    <p>
      <button class="close" id=${index} >Remove</button>
    </p>
    </div>
   `;
    });
    NewBook.setEventListeners();
  }

  static addFunction =(e) => {
    e.preventDefault();
    const title = document.querySelector('.title').value.trim();
    const author = document.querySelector('.author').value.trim();
    if (title === '' || author === '') {
      return;
    }
    const newbook = new NewBook(title, author);
    books = books.concat(newbook);
    document.querySelector('form').reset();
    document.querySelector('.title').focus();
    NewBook.renderBooks();
  }

  static updateIndex = () => {
    books.forEach((book, index) => {
      book.id = index;
    });
  }

  static removeFunction = (e) => {
    const num = parseInt(e.target.id, 10);
    books = books.filter((book) => book.id !== num);
    NewBook.updateIndex();
    NewBook.renderBooks();
  }

  static setEventListeners=() => {
    const buttons = document.querySelectorAll('.close');
    buttons.forEach((btn) => {
      btn.addEventListener('click', NewBook.removeFunction);
    });
  }
}

add.addEventListener('click', (e) => {
  NewBook.addFunction(e);
});

export { NewBook };
