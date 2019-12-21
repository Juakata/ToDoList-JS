import { closeTaskForm, renderInfo } from './taskView';
import { ToDo } from '../models/toDo';

let saveProjects = JSON.parse(localStorage.getItem('saveProjects'));

export const addTask = (event) => {
  const id = event.target.id.split('-').slice(-1);
  const taskFormData = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    dueDate: document.getElementById('dueDate').value,
    priority: document.getElementById('top-priority').checked,
  };
  const task = ToDo(taskFormData.title, taskFormData.description,
    taskFormData.dueDate, taskFormData.priority, false);
  saveProjects = JSON.parse(localStorage.getItem('saveProjects'));
  saveProjects[id].checklist.push(task);
  localStorage.setItem('saveProjects', JSON.stringify(saveProjects));
  closeTaskForm();
  renderInfo(event);
};

export const editTask = (id, i, event) => {
  saveProjects = JSON.parse(localStorage.getItem('saveProjects'));
  saveProjects[id].checklist[i].title = document.getElementById('title').value;
  saveProjects[id].checklist[i].description = document.getElementById('description').value;
  saveProjects[id].checklist[i].dueDate = document.getElementById('dueDate').value;
  saveProjects[id].checklist[i].dueDate = document.getElementById('dueDate').value;
  localStorage.setItem('saveProjects', JSON.stringify(saveProjects));
  closeTaskForm();
  renderInfo(event);
};
