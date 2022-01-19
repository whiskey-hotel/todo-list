import { newElement, sendToBody, removeAllChildNodes } from "./DOMController";

const projects = (name) => {
	const getName = () => name;

	const create = function () {
		const modifiedNameForID = name.replace(/\s/g, "");
		const newProject = newElement("div", "project-list", `${modifiedNameForID}-list`);
		const newListTitle = newElement("h3", "project-title", ...Array(1), `${name}`);
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
	const projectsContainer = newElement("div", "projects-container");
	const projectsDiv = newElement("div", ...Array(1), "projects-div");
	const projectHeader = newElement("div", "header");
	const projectTitle = newElement("h1", "title", ...Array(1), "My Projects");
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

	projectsContainer.appendChild(projectHeader);
	projectsContainer.appendChild(projectsDiv);
	projectHeader.appendChild(projectTitle);
	projectsDiv.appendChild(mainList);
	mainList.appendChild(listTitle);
	mainList.appendChild(numberOfTasks);
	projectsContainer.appendChild(addProjectDiv);
	addProjectDiv.appendChild(addProjectIcon);
	addProjectDiv.appendChild(addProject);

	taskDiv.appendChild(taskHeader);
	taskDiv.appendChild(taskTitle);
	taskDiv.appendChild(taskListDiv);

	addProjectDiv.addEventListener("click", function () {
		sendToBody(displayNewProjectWindow());
	});

	return { projectsContainer, taskDiv };
}

function displayNewProjectWindow() {
	const newProjectContainer = newElement("div", ...Array(1), "new-project-form-container");
	const newProjectDiv = newElement("div", ...Array(1), "new-project-form-div");
	const title = newElement("h2", "pop-up-window-title", ...Array(1), "New Project");
	const projectNameInputLabel = newElement("label", "form-labels", ...Array(1), "Name:");
	const projectNameInput = newElement("input", "form-input", "project-name-input");
	projectNameInput.type = "text";
	projectNameInputLabel.setAttribute("for", "project-name-input");
	const buttonSelectorDiv = newElement("div", ...Array(1), "button-selector-div");
	const cancelButton = newElement("button", "button", "project-cancel-button", "Cancel");
	const submitButton = newElement("input", "button", "project-submit-button");
	submitButton.type = "submit";
	submitButton.value = "OK";
	submitButton.setAttribute("for", "project-name-input");

	newProjectContainer.appendChild(newProjectDiv);
	newProjectDiv.appendChild(title);
	newProjectDiv.appendChild(projectNameInputLabel);
	newProjectDiv.appendChild(projectNameInput);
	newProjectDiv.appendChild(buttonSelectorDiv);
	buttonSelectorDiv.appendChild(cancelButton);
	buttonSelectorDiv.appendChild(submitButton);

	const closeWindow = (element) => {
		document.body.removeChild(element);
	};

	cancelButton.addEventListener("click", function () {
		closeWindow(newProjectContainer);
	});

	submitButton.addEventListener("click", function () {
		// const projectsDiv = home().projectsContainer.childNodes[1];
		const projectsDiv = document.getElementById('projects-div');
		let projectNameValue = projectNameInput.value;
		let instantiateProjectObject = projects(projectNameValue);
		let newProject = instantiateProjectObject.create();
		projectsDiv.appendChild(newProject);
		closeWindow(newProjectContainer);
		
	});

	return newProjectContainer;
}

export { home };
