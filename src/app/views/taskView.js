import { ToDo } from '../models/toDo';

let saveProjects = JSON.parse(localStorage.getItem('saveProjects'));

export const renderInfo = (event) => {
  const id = event.target.id.split("-").splice(-1);
  const list = document.getElementById("project__list");
  highlightElement(id);
  list.innerHTML = '';
  const btnAdd = document.createElement('button');
  btnAdd.classList.add('btn-form');
  btnAdd.classList.add('add-task');
  btnAdd.id = `addTask-${id}`;
  const iPlus = document.createElement("i");
  iPlus.classList.add('fa');
  iPlus.classList.add('fa-plus');
  saveProjects = JSON.parse(localStorage.getItem('saveProjects'));
  btnAdd.appendChild(document.createTextNode(`${saveProjects[id].title} Add Task `));
  btnAdd.appendChild(iPlus);
  list.appendChild(btnAdd);
  saveProjects[id].checklist.forEach((element, i) => {
    const unit = document.createElement('div');
    unit.classList.add("task-container");
    let priority = checkPriority(id, i);
    createToDo(id, i, element, priority, list);
    document.getElementById(`btnP-${i}-${id}`).addEventListener("click", () => {
      changePriority(id, i);
    }, false);
  });
  const addNew = document.getElementById(`addTask-${id}`);
  addNew.addEventListener("click", showTaskForm, false);
  closeTaskForm();
}

const changePriority = (id, i) => {
  if (saveProjects[id].checklist[i].priority) {
    saveProjects[id].checklist[i].priority = false;
  } else {
    saveProjects[id].checklist[i].priority = true;
  }
  localStorage.setItem('saveProjects', JSON.stringify(saveProjects));
  renderInfo(event);
}

const showTaskForm = (event) => {
  const id = event.target.id.split("-").slice(-1);
  const taskForm = document.getElementById("task__form");
  taskForm.style.display = "block";

  if (!document.getElementById(`btn-${id}`)) {
    const formBtn = document.createElement("button");
    const closeBtn = document.createElement("button");
    const div = document.createElement("div");
    div.id = "btn-container";
    formBtn.id = `btn-${id}`;
    closeBtn.id = `btnClose-${id}`;
    formBtn.classList.add('btn-form');
    closeBtn.classList.add('btn-close-form');
    formBtn.setAttribute("type", "button");
    closeBtn.setAttribute("type", "button");
    formBtn.innerText = "Add";
    closeBtn.innerText = "Cancel";
    div.appendChild(formBtn);
    div.appendChild(closeBtn);
    taskForm.appendChild(div);
    formBtn.addEventListener("click", addTask, false);
    closeBtn.addEventListener('click', closeTaskForm.bind(), false);
  }
}

const createToDo = (id, i, element, priority, list) => {
  const unit = document.createElement('div');
  unit.classList.add("task-container");
  const h21 = document.createElement("h2");
  const h22 = document.createElement("h2");
  const h23 = document.createElement("h2");
  const label = document.createElement("label");
  const labelBtn = document.createElement("label");
  const checkBox = document.createElement('input');
  label.classList.add('block-label');
  labelBtn.classList.add('block-label');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.checked = saveProjects[id].checklist[i].completed;
  checkBox.id = "checkBox";
  h21.id = 'p-title';
  h21.appendChild(document.createTextNode(element.title));
  h22.appendChild(document.createTextNode(`Description: ${element.description}`));
  h23.appendChild(document.createTextNode(`Deadline: ${element.dueDate}`));
  const btnP = document.createElement('button');
  btnP.classList.add(priority.toLowerCase());
  btnP.appendChild(document.createTextNode(checkPriority(id, i)));
  btnP.id = `btnP-${i}-${id}`;
  unit.appendChild(h21);
  unit.appendChild(h22);
  unit.appendChild(h23);
  labelBtn.appendChild(document.createTextNode("Priority: "));
  labelBtn.appendChild(btnP);
  unit.appendChild(labelBtn);
  unit.appendChild(label);
  label.appendChild(document.createTextNode("Completed: "));
  label.appendChild(checkBox);
  list.appendChild(unit);
  checkBox.addEventListener("click", () => {
    markComplete(id, i, checkBox);
  }, false);
}

const markComplete = (id, i, checkBox) => {
  if (checkBox.checked) {
    saveProjects[id].checklist[i].completed = true;
  } else {
    saveProjects[id].checklist[i].completed = false;
  }
  localStorage.setItem('saveProjects', JSON.stringify(saveProjects));
}

const closeTaskForm = () => {
  const taskForm = document.getElementById("task__form");
  taskForm.style.display = "none";
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  document.getElementById('dueDate').value = '';
}

const addTask = (event) => {
  const id = event.target.id.split("-").slice(-1);
  const taskFormData = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    dueDate: document.getElementById('dueDate').value,
    priority: document.getElementById('top-priority').checked
  };
  const task = ToDo(taskFormData.title, taskFormData.description, taskFormData.dueDate, taskFormData.priority, false);
  saveProjects = JSON.parse(localStorage.getItem('saveProjects'));
  saveProjects[id].checklist.push(task);
  localStorage.setItem('saveProjects', JSON.stringify(saveProjects));
  closeTaskForm(event);
  renderInfo(event);
}

const checkPriority = (id, i) => {
  saveProjects = JSON.parse(localStorage.getItem('saveProjects'));
  let priority = "";
  if (saveProjects[id].checklist[i].priority) {
    priority = "High";
  } else {
    priority = "Normal";
  }
  return priority;
}

const highlightElement = (id) => {
  const highlighted = document.querySelectorAll("[id ^= 'projectContainer']");
  highlighted.forEach(element => element.classList.remove('highlight'));
  document.getElementById(`projectContainer-${id}`).classList.add('highlight');
}
