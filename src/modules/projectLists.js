import { newElement } from "./DOMController";

const projects = (name) => {
	const getName = () => name;

	const create = function () {
		const newProject = newElement("div", "project-list", `${this.name}-list`);
		const newListTitle = newElement("h3", "project-title", ...Array(1), `${this.name}`);
		const numberOfTasks = newElement("span", "number-of-tasks", ...Array(1), "0");

		newProject.appendChild(newListTitle);
		newProject.appendChild(numberOfTasks);

		return newProject;
	};

    const update = function(){};
    const del = function(){};

	return { getName, create };
};

const tasks = (task, day, time, notes, URL) => {
	const getTask = () => task;
	const getDay = () => day;
	const getTime = () => time;
	const getNotes = () => notes;
	const getURL = () => URL;

	return { getTask, getDay, getTime, getNotes, getURL };
};

function home() {
	const projectsDiv = newElement("div", "projects-container");
	const projectHeader = newElement("div", "header");
	const projectTitle = newElement("h1", "title", ...Array(1), "My Projects");
	const projectListDiv = newElement("div", "project-list-div");
	const mainList = newElement("div", "project-list", "all-list");
	const listTitle = newElement("h3", "project-title", ...Array(1), "All");
	const numberOfTasks = newElement("span", "number-of-tasks", ...Array(1), "0");

	const taskDiv = newElement("div", "task-container");
	const taskHeader = newElement("div", "header");
	const taskTitle = newElement("h1", "title", ...Array(1), "All");
	const taskListDiv = newElement("div", "task-list-div");

	projectsDiv.appendChild(projectHeader);
	projectsDiv.appendChild(projectTitle);
	projectsDiv.appendChild(projectListDiv);
	projectsDiv.appendChild(mainList);
	mainList.appendChild(listTitle);
	mainList.appendChild(numberOfTasks);

	taskDiv.appendChild(taskHeader);
	taskDiv.appendChild(taskTitle);
	taskDiv.appendChild(taskListDiv);

	return { projectsDiv, taskDiv };
}

export { home };
