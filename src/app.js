const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;

  list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
  e.preventDefault();

  const todo = addForm.add.value.trim();

  // Nu permitem introducerea campurilor goale. generateTemplate() va fi apelat doar daca am introdus ceva ce are lungimea mai mare dacat 0:
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset(); // Curățăm conținutul câmpului de input
  }
});
