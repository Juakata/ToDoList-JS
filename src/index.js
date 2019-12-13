import './main.css';

let projects = [];



const Project = (title, description, dueDate, priority, checklist) => {
  return {
    title,
    description,
    dueDate,
    priority,
    checklist
  }
}

const ToDo = (content, completed) => {
  return {
    content,
    completed
  }
}

const p = Project("Project 1", "Description of project 1", "10-10-2019", false, []);
const p2 = Project("Project 2", "Description of project 2", "08-08-2019", true, []);
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
}

function addProject() {
  const formData = {
    title: document.getElementById('title'),
    description: document.getElementById('description'),
    dueDate: document.getElementById('dueDate'),
    priority: document.getElementById('top-priority')
  };
  const project = Project(formData.title.value, formData.description.value, formData.dueDate.value, formData.priority.checked, []);
  projects.push(project);
  renderProjects();
  hideForm();
}

function renderInfo(event) {
  const id = event.target.id.split("-").splice(-1);
  const list = document.getElementById("project__list");
  let tasks = "";
  let priority = "";

  projects[id].checklist.forEach(element => {
    tasks += `<h3>${element.content}</h3>`;
  });
  if(projects[id].priority) {
    priority = "Top";
  } else {
    priority = "Normal";
  }
  list.innerHTML = `
    <h2 id="p-title">${projects[id].title}</h2>
    <h2>Description: ${projects[id].description}</h2>
    <h2>Deadline: ${projects[id].dueDate}</h2>
    <h2>Priority: ${priority}</h2>
    <div class="list-tasks">${tasks}</div>
    <button type="button" class="btn-form" id="addTask-${id}">Add Task</button>
  `;
  const addNew = document.getElementById(`addTask-${id}`);
  addNew.addEventListener("click", showTaskForm, false);
}

function addTask(event) {
  const id = event.target.id.split("-").slice(-1);
  const taskFormData = {
    task: document.getElementById("task")
  }
  const task = ToDo(taskFormData.task.value, false);
  projects[id].checklist.push(task);
  closeTaskForm(event);
  renderInfo(event);
}

function closeTaskForm(event) {
  const id = event.target.id.split("-").slice(-1);
  const taskForm = document.getElementById("task__form");
  taskForm.style.display = "none";
  taskForm.removeChild(document.getElementById(`btn-${id}`));
  taskForm.removeChild(document.getElementById(`btnClose-${id}`));
  document.getElementById('task').value = '';
}

function showTaskForm(event) {
  const id = event.target.id.split("-").slice(-1);
  const taskForm = document.getElementById("task__form");
  taskForm.style.display = "block";
  if(!document.getElementById(`btn-${id}`)) {
    const formBtn = document.createElement("button");
    const closeBtn = document.createElement("button");
    formBtn.id = `btn-${id}`;
    closeBtn.id = `btnClose-${id}`;
    formBtn.classList.add('btn-form');
    closeBtn.classList.add('btn-close-form');
    formBtn.setAttribute("type", "button");
    closeBtn.setAttribute("type", "button");
    formBtn.innerText = "Add";
    closeBtn.innerText = "Cancel";
    taskForm.appendChild(formBtn);
    taskForm.appendChild(closeBtn);
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
