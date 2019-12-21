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

document.getElementById('btn-close').addEventListener('click', projectView.hideForm, false);
