document.addEventListener("DOMContentLoaded", () => {

  let select = document.querySelector('select')
  let form = document.getElementById('create-task-form')
  let formInput = document.getElementById('new-task-description')
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedColor = select.value;
    buildList(formInput.value, selectedColor);
    form.reset();
  });
  })

function buildList(ToDo, color) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  let li = document.createElement('li');

  p.style.color = color;
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x';
  p.textContent = `${ToDo}`;
  p.classList.add('toDoItem');
  li.appendChild(p);
  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e) {
  const li = e.target.closest('li');
  li.remove();
}

