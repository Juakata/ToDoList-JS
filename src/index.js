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

const ToDo = (content) => {
  return {
    content
    // completed,
    // priority
  }
}

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
  list.innerHTML = `
    <h2>${projects[id].title}</h2>
    <h3>${projects[id].description}</h2>
    <h4>${projects[id].dueDate}</h2>
    <button type="button" id="addTask-${id}">Add Task</button>
  `
  const addNew = document.getElementById(`addTask-${id}`);
  addNew.addEventListener("click", showTaskForm, false);
}

function addTask(event) {
  const id = event.target.id.split("-").slice(-1);
  const taskFormData = {
    task: document.getElementById("task")
  }
  const task = ToDo(taskFormData.task.value);
  projects[id].checklist.push(task);
}

function showTaskForm(event) {
  const id = event.target.id.split("-").slice(-1);
  const taskForm = document.getElementById("task__form");
  taskForm.style.display = "block";
  const formBtn = document.createElement("button");
  formBtn.id = `btn-${id}`;
  formBtn.setAttribute("type", "button");
  formBtn.innerText = "Add"
  taskForm.appendChild(formBtn);
  formBtn.addEventListener("click", addTask, false);
}

function renderProjects() {
  const container = document.getElementById("project");

  container.innerHTML = "";
  projects.forEach((project, i) => {
    const span = document.createElement('span');
    span.id = `project-${i}`;
    const text = document.createTextNode(project.title);
    span.appendChild(text);
    span.addEventListener("click", renderInfo.bind(), false);
    container.appendChild(span);
  });

}





