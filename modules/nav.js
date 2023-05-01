const nav=()=>{
const addNew = document.getElementById('add-new');
const read = document.getElementById('read');
const contact = document.getElementById('contact');
const booklist = document.getElementById('book-list');
const go = document.getElementById('go');
const then = document.getElementById('then');
const navitem = document.querySelectorAll('.navitem');

addNew.classList.add('active');
contact.classList.add('active');
booklist.classList.add('active');

navitem.forEach((item) => {
  item.addEventListener('click', ({ target: { id } }) => {
    if (id === 'go') {
      addNew.classList.remove('active');
      read.classList.add('active');
      contact.classList.add('active');
      go.classList.add('active');
      booklist.classList.remove('active');
      then.classList.remove('active');
    } else if (id === 'then') {
      contact.classList.remove('active');
      addNew.classList.add('active');
      read.classList.add('active');
      go.classList.remove('active');
      booklist.classList.remove('active');
      then.classList.add('active');
    } else {
      read.classList.remove('active');
      addNew.classList.add('active');
      contact.classList.add('active');
      go.classList.remove('active');
      booklist.classList.add('active');
      then.classList.remove('active');
    }
  });
});
}

export { nav };