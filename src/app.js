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

//TODO delete todos:
// Adaugam addEventListener pe parintele inregistrarii TODO. Parintele unei inregistrari TODO este intreaga lista de TODO-uri. Astfel, datorita propagarii in sus a evenimentelor (bubbling), click-ul pe orice children, inclusiv pe un nou TODO adaugat, va fi capturat cu ajutorul acestui EventListener:
list.addEventListener('click', e => {
  // Verificăm dacă elementul pe care s-a făcut click conține clasa "delete", asociată cu iconița de ștergere (recycleBin). Dacă da, eliminam elementul parinte care, de data aceasta, este intregul element 'li' (inregistrarea TODO curenta):
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});
