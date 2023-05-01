import { nav } from './modules/nav.js';
import { Date } from '/modules/date.js';
import { NewBook } from './modules/book.js';
Date();
nav();

window.location.onload = NewBook.renderBooks();