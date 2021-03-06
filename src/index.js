import { ToDo } from './app/models/toDo';
import { Project } from './app/models/project';
import * as projectView from './app/views/projectView';
import './main.css';


const p = Project('Project 1', []);
const p2 = Project('Project 2', []);

const task = ToDo('Task 1', 'Desc of task 1', '2019-12-12', false, false);
const task2 = ToDo('Task 2', 'Desc of task 2', '2019-12-12', true, false);
const task3 = ToDo('Task 3', 'Desc of task 3', '2019-12-12', true, false);
const task4 = ToDo('Task 4', 'Desc of task 4', '2019-12-12', false, false);

p.checklist.push(task);
p.checklist.push(task2);
p2.checklist.push(task3);
p2.checklist.push(task4);

let saveProjects = JSON.parse(localStorage.getItem('saveProjects'));
const iOpenMenu = document.getElementById('open-sidemenu');

window.onload = () => {
  const sideMenu = document.getElementById('project');
  const width = sideMenu.clientWidth;
  if (document.body.clientWidth <= 980) {
    sideMenu.style.transform = `translateX(-${width}px)`;
  }
};

window.onresize = () => {
  const sideMenu = document.getElementById('project');
  const width = sideMenu.clientWidth;
  if (document.body.clientWidth > 980) {
    iOpenMenu.className = 'fa fa-bars';
    iOpenMenu.style.display = 'none';
    sideMenu.style.transform = 'translateX(0)';
    sideMenu.style.top = '0';
  } else {
    iOpenMenu.style = 'inline-block';
    iOpenMenu.className = 'fa fa-bars';
    sideMenu.position = 'fixed';
    sideMenu.style.transform = `translateX(-${width}px)`;
    sideMenu.style.top = '87px';
  }
};

function openMenu() {
  const sideMenu = document.getElementById('project');
  const width = sideMenu.clientWidth;
  if (iOpenMenu.className === 'fa fa-bars') {
    iOpenMenu.className = 'fa fa-times';
    sideMenu.style.transform = 'translateX(0)';
  } else {
    iOpenMenu.className = 'fa fa-bars';
    sideMenu.style.transform = `translateX(-${width}px)`;
  }
}

if (saveProjects == null) {
  localStorage.setItem('saveProjects', JSON.stringify([]));
  saveProjects = JSON.parse(localStorage.getItem('saveProjects'));
  saveProjects.push(p);
  saveProjects.push(p2);
  localStorage.setItem('saveProjects', JSON.stringify(saveProjects));
}

const newProject = document.getElementById('newProject');
newProject.addEventListener('click', projectView.renderForm, false);

projectView.renderProjects();
iOpenMenu.addEventListener('click', openMenu, false);
document.getElementById('btn-close').addEventListener('click', projectView.hideForm, false);
