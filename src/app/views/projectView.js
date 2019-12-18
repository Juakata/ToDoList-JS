import * as taskView from './taskView';
import { Project } from '../models/project';

let saveProjects = JSON.parse(localStorage.getItem('saveProjects'));

export const renderForm = () => {
  const form = document.getElementById("project__form");
  const btn = document.getElementById("project__form-btn");
  form.style.display = "block";
  btn.addEventListener("click", addProject, false);
}

const addProject = () => {
  const formData = {
    title: document.getElementById('projectTitle')
  };
  const project = Project(formData.title.value, []);
  saveProjects = JSON.parse(localStorage.getItem('saveProjects'));
  saveProjects.push(project);
  localStorage.setItem('saveProjects', JSON.stringify(saveProjects));
  renderProjects();
  hideForm();
}

export const hideForm = () => {
  const form = document.getElementById("project__form");
  form.style.display = "none";
  document.getElementById('projectTitle').value = '';
}

export const renderProjects = () => {
  const container = document.getElementById("project");
  container.innerHTML = "";
  container.innerHTML = `<h1>Projects</h1>`;
  container.innerHTML += `<nav>
    <ul id="projects-menu">
    </ul>
  </nav>`;
  saveProjects = JSON.parse(localStorage.getItem('saveProjects'));
  saveProjects.forEach((project, i) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.id = `projectContainer-${i}`
    span.id = `project-${i}`;
    const text = document.createTextNode(project.title);
    span.appendChild(text);
    const icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-trash');
    icon.id = `i-delete-${i}`;
    icon.addEventListener("click", deleteProject.bind(), false);
    span.addEventListener("click", taskView.renderInfo.bind(), false);
    document.getElementById('projects-menu').appendChild(li);
    li.appendChild(span);
    li.appendChild(icon);
  });
}

const deleteProject = (event) => {
  const id = event.target.id.split("-").slice(-1);
  saveProjects = JSON.parse(localStorage.getItem('saveProjects'));
  saveProjects.splice(id, 1);
  localStorage.setItem('saveProjects', JSON.stringify(saveProjects));

  renderProjects();
  document.getElementById("project__list").innerHTML = '';
}

