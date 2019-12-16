import './main.css';

let projects = [];



const ToDo = (title, description, dueDate, priority, completed) => {
  return {
    title,
    description,
    dueDate,
    priority,
    completed
  }
}

const Project = (title, checklist) => {
  return {
    title,
    checklist
  }
}

const p = Project("Project 1", []);
const p2 = Project("Project 2", []);
projects.push(p);
projects.push(p2);

const newProject = document.getElementById("newProject");
newProject.addEventListener("click", renderForm, false);


function renderForm() {
  const form = document.getElementById("project__form");
  const btn = document.getElementById("project__form-btn");
  form.style.display = "block";
  btn.addEventListener("click", addProject, false);
}

function hideForm() {
  const form = document.getElementById("project__form");
  form.style.display = "none";
  document.getElementById('projectTitle').value = '';
}

function addProject() {
  const formData = {
    title: document.getElementById('projectTitle')
  };
  const project = Project(formData.title.value, []);
  projects.push(project);
  renderProjects();
  hideForm();
}

function renderInfo(event) {
  const id = event.target.id.split("-").splice(-1);
  const list = document.getElementById("project__list");
  list.innerHTML = '';
  const btnAdd = document.createElement('button');
  btnAdd.classList.add('btn-form');
  btnAdd.classList.add('add-task');
  btnAdd.id = `addTask-${id}`;
  btnAdd.appendChild(document.createTextNode('Add Task'));
  list.appendChild(btnAdd);
  projects[id].checklist.forEach((element, i) => {
    let priority = checkPriority(id, i);
    const h21 = document.createElement("h2");
    const h22 = document.createElement("h2");
    const h23 = document.createElement("h2");
    const label = document.createElement("label");
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = projects[id].checklist[i].completed;
    h21.id = 'p-title';
    h21.appendChild(document.createTextNode(element.title));
    h22.appendChild(document.createTextNode(`Description: ${element.description}`));
    h23.appendChild(document.createTextNode(`Deadline: ${element.dueDate}`));
    const btnP = document.createElement('button');
    btnP.classList.add(priority.toLowerCase());
    btnP.appendChild(document.createTextNode(checkPriority(id, i)));
    btnP.id = `btnP-${i}-${id}`;
    list.appendChild(h21);
    list.appendChild(h22);
    list.appendChild(h23);
    list.appendChild(btnP);
    list.appendChild(label);
    label.appendChild(document.createTextNode("Completed: "))
    label.appendChild(checkBox);
    document.getElementById(`btnP-${i}-${id}`).addEventListener("click", () => {
      if (projects[id].checklist[i].priority) {
        projects[id].checklist[i].priority = false;
      } else {
        projects[id].checklist[i].priority = true;
      }
      renderInfo(event);
    }, false);
    checkBox.addEventListener("click", () => {
      if (checkBox.checked) {
        projects[id].checklist[i].completed = true;
      } else {
        projects[id].checklist[i].completed = false;
      }
      renderInfo(event);
    }, false);
  });
  const addNew = document.getElementById(`addTask-${id}`);
  addNew.addEventListener("click", showTaskForm, false);
}

function checkPriority(id, i) {
  let priority = "";
  if (projects[id].checklist[i].priority) {
    priority = "High";
  } else {
    priority = "Normal";
  }
  return priority;
}

function changePriority(priority) {
  const options = ["High", "Normal"];
  if (priority === options[0]) {
    return options[1];
  } else {
    return options[2];
  }
}

function closeTaskForm(event) {
  const id = event.target.id.split("-").slice(-1);
  const taskForm = document.getElementById("task__form");
  taskForm.style.display = "none";
  taskForm.removeChild(document.getElementById(`btn-container`));
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  document.getElementById('dueDate').value = '';
}

function addTask(event) {
  const id = event.target.id.split("-").slice(-1);
  const taskFormData = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    dueDate: document.getElementById('dueDate').value,
    priority: document.getElementById('top-priority').checked
  };
  const task = ToDo(taskFormData.title, taskFormData.description, taskFormData.dueDate, taskFormData.priority, false);
  projects[id].checklist.push(task);
  closeTaskForm(event);
  renderInfo(event);
}

function showTaskForm(event) {
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

function deleteProject(event) {
  const id = event.target.id.split("-").slice(-1);
  projects.splice(id, 1);
  renderProjects();
  document.getElementById("project__list").innerHTML = '';
}

function renderProjects() {
  const container = document.getElementById("project");

  container.innerHTML = "";
  container.innerHTML = `<h1>Projects</h1>`;
  container.innerHTML += `<nav>
    <ul id="projects-menu">
    </ul>
  </nav>`;
  projects.forEach((project, i) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.id = `project-${i}`;
    const text = document.createTextNode(project.title);
    span.appendChild(text);
    const icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-trash');
    icon.id = `i-delete-${i}`;
    icon.addEventListener("click", deleteProject.bind(), false);
    span.addEventListener("click", renderInfo.bind(), false);
    document.getElementById('projects-menu').appendChild(li);
    li.appendChild(span);
    li.appendChild(icon);
  });

}

renderProjects();

document.getElementById('btn-close').addEventListener('click', hideForm, false);
