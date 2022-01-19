import { newElement, sendToBody, removeAllChildNodes } from "./DOMController";

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

	const update = function () {};
	const del = function () {};

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

	const addProjectDiv = newElement("div", ...Array(1), "add-project-div");
	const addProjectIcon = newElement("span", "material-icons-outlined", "add-project-icon", "add_circle_outline");
	const addProject = newElement("span", ...Array(1), "add-project", "Add Project");

	projectsDiv.appendChild(projectHeader);
	projectsDiv.appendChild(projectTitle);
	projectsDiv.appendChild(projectListDiv);
	projectsDiv.appendChild(mainList);
	mainList.appendChild(listTitle);
	mainList.appendChild(numberOfTasks);
	projectsDiv.appendChild(addProjectDiv);
	addProjectDiv.appendChild(addProjectIcon);
	addProjectDiv.appendChild(addProject);

	taskDiv.appendChild(taskHeader);
	taskDiv.appendChild(taskTitle);
	taskDiv.appendChild(taskListDiv);

	addProjectDiv.addEventListener("click", function () {
		sendToBody(displayNewProjectWindow());
	});

	return { projectsDiv, taskDiv };
}

function displayNewProjectWindow() {
	const newProjectContainer = newElement("div", ...Array(1), "new-project-container");
	const newProjectDiv = newElement("div", ...Array(1), "new-project-div");
	const title = newElement("h2", "pop-up-window-title", ...Array(1), "New Project");
	const projectNameInputLabel = newElement("label", "form-labels", ...Array(1), "Name:");
	const projectNameInput = newElement("input", "form-input", "project-name-input");
	projectNameInput.type = "text";
	projectNameInputLabel.setAttribute("for", "project-name-input");
	const buttonSelectorDiv = newElement("div", ...Array(1), "button-selector-div");
	const cancelButton = newElement("button", "button", "project-cancel-button", "Cancel");
	const submitButton = newElement("input", "button", "project-submit-button", "Submit");
	submitButton.type = "submit";
	submitButton.setAttribute("for", "project-name-input");

	newProjectContainer.appendChild(newProjectDiv);
	newProjectDiv.appendChild(title);
	newProjectDiv.appendChild(projectNameInputLabel);
	newProjectDiv.appendChild(projectNameInput);
	newProjectDiv.appendChild(buttonSelectorDiv);
	buttonSelectorDiv.appendChild(cancelButton);
	buttonSelectorDiv.appendChild(submitButton);

	cancelButton.addEventListener("click", function () {
		document.body.removeChild(newProjectContainer);
	});

	return newProjectContainer;
}

export { home };
