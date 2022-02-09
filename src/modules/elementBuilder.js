import { newElement, sendToBody } from "./DOMController";
import { newTask, displayNewTaskWindow, showHideCompletedTasks } from "./taskHandler";
import { displayAllProjectTasks, displaySelectedProjectTasks, removeAllTasks, createProject } from "./projectHandler";
import { pageState } from "./storage";
import { projects } from "./objectFactory";

function home(mainObj) {
	const projectsContainer = newElement("div", "projects-container");
	const projectsDiv = newElement("div", ...Array(1), "projects-div");
	const projectHeader = newElement("div", "header");
	const projectTitle = newElement("h1", "title", ...Array(1), "My Projects");
	const mainList = newElement("div", "project-list", "all-list");
	mainList.setAttribute("data-value", "P0");
	const listTitle = newElement("h3", "project-title", ...Array(1), "All");
	const numberOfTasks = newElement("span", "number-of-tasks", `P0-task-count`, mainObj.numberOfTasks);
	const taskContainer = newElement("div", "task-container");
	const taskDiv = newElement("div", ...Array(1), "task-div");
	const taskHeader = newElement("div", "header");
	const taskTitle = newElement("h2", "title", "project-title-for-task-list", mainObj.projectName);
	const completedDiv = newElement("div", ...Array(1), "completed-task-div");
	const completedTasks = newElement("p", ...Array(2), "Completed Tasks:");
	const countOfCompletedTasks = newElement("span", ...Array(1), "completed-task-count", "0");
	const showCompletedTasks = newElement("p", ...Array(1), "show-hide-btn", "Show/Hide Completed Tasks");
	const taskListDiv = newElement("div", "task-list-div", "main-task-div");
	const addProjectDiv = newElement("div", ...Array(1), "add-project-div");
	const addProjectIcon = newElement("span", "material-icons-outlined", "add-project-icon", "add_circle_outline");
	const addProject = newElement("span", ...Array(1), "add-project", "Add Project");
	const addTaskDiv = newElement("div", ...Array(1), "add-task-div");
	const addTaskIcon = newElement("span", "material-icons-outlined", "add-task-icon", "add_circle");

	projectsContainer.appendChild(projectHeader);
	projectsContainer.appendChild(projectsDiv);
	projectHeader.appendChild(projectTitle);
	projectsDiv.appendChild(mainList);
	mainList.appendChild(listTitle);
	mainList.appendChild(numberOfTasks);
	projectsContainer.appendChild(addProjectDiv);
	addProjectDiv.appendChild(addProjectIcon);
	addProjectDiv.appendChild(addProject);

	taskContainer.appendChild(taskDiv);
	taskDiv.appendChild(taskHeader);
	taskHeader.appendChild(taskTitle);
	taskDiv.appendChild(completedDiv);
	completedDiv.appendChild(completedTasks);
	completedDiv.appendChild(countOfCompletedTasks);
	completedDiv.appendChild(showCompletedTasks);
	taskDiv.appendChild(taskListDiv);
	taskContainer.appendChild(addTaskDiv);
	addTaskDiv.appendChild(addTaskIcon);

	addProjectDiv.addEventListener("click", function () {
		sendToBody(displayNewProjectWindow());
	});

	addTaskIcon.addEventListener("click", function () {
		sendToBody(displayNewTaskWindow());
	});

	mainList.addEventListener("click", function (e) {
		displayAllProjectTasks(e);
	});

	let showCompleted = false;
	completedDiv.addEventListener("click", function () {
		showCompleted = showHideCompletedTasks(showCompleted);
	});

	return { projectsContainer, taskContainer };
}

function newProject(obj) {
	const name = obj.projectName;
	const storageKey = obj.key;
	const numberOfTasks = obj.numberOfTasks;

	const modifiedNameForID = name.replace(/\s/g, "");
	const newProject = newElement("div", "project-list", `${modifiedNameForID}-list`);
	newProject.setAttribute("data-value", storageKey);
	const newListTitle = newElement("h3", "project-title", ...Array(1), `${name}`);
	const numberOfTasksElement = newElement("span", "number-of-tasks", `${storageKey}-task-count`, `${numberOfTasks}`);

	const moreInfoIcon = newElement("span", "material-icons-outlined", `info-icon-${storageKey}`, "info");
	moreInfoIcon.classList.add("more-info-icon");
	newProject.addEventListener("mouseover", function () {
		moreInfoIcon.style.display = "inline-block";
	});

	newProject.addEventListener("mouseout", function () {
		moreInfoIcon.style.display = "none";
	});

	moreInfoIcon.addEventListener("click", function () {
		const dropDownDiv = dropDownOptionForProjects(storageKey);
		newProject.appendChild(dropDownDiv);
	});

	newProject.addEventListener("click", function (e) {
		displaySelectedProjectTasks(e);
	});

	newProject.appendChild(newListTitle);
	newProject.appendChild(numberOfTasksElement);
	newProject.appendChild(moreInfoIcon);

	return newProject;
}

function dropDownOptionForProjects(storageKey) {
	const dropDownDiv = newElement("div", "drop-down-content", "drop-down");
	const updateButton = newElement("span", "drop-down-option", `task${storageKey}-update-button`, "Rename");
	const deleteButton = newElement("span", "drop-down-option", `task${storageKey}-delete-button`, "Delete");
	updateButton.setAttribute("data-value", storageKey);
	deleteButton.setAttribute("data-value", storageKey);

	let newProject = document.body.querySelector(`.project-list[data-value=${storageKey}]`);
	let more = document.body.querySelector(`#info-icon-${storageKey}`);

	/* This behavior is unexpected. looping through all storagekeys instead of just the one storage
        key associated with the clicked element. error occurs in the console at every execution */
	document.addEventListener("click", function (e) {
		if (document.getElementById("drop-down") && !document.getElementById("drop-down").contains(e.target) && e.target != more) {
			newProject.removeChild(document.getElementById("drop-down"));
		}
	});

	updateButton.addEventListener("click", function () {
		sendToBody(displayNewProjectWindow(storageKey));
		newProject.removeChild(dropDownDiv);
	});

	deleteButton.addEventListener("click", function () {
		const mainProjectsDiv = document.getElementById("projects-div");
		const deletedProject = document.body.querySelector(`.project-list[data-value=${storageKey}`);
		removeAllTasks(storageKey);
		projects().deleteProject(storageKey);
		mainProjectsDiv.removeChild(deletedProject);
	});

	dropDownDiv.appendChild(updateButton);
	dropDownDiv.appendChild(deleteButton);

	return dropDownDiv;
}

function displayNewProjectWindow(storageKey = null) {
	const newProjectContainer = newElement("div", ...Array(1), "new-project-form-container");
	const newProjectDiv = newElement("div", ...Array(1), "new-project-form-div");
	const title = newElement("h2", "pop-up-window-title", ...Array(1), "New Project");
	const error = newElement("div", ...Array(1), "project-name-error");
	const projectForm = newElement("form", ...Array(1), "project-form");
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

	if (storageKey) {
		projectNameInput.value = pageState.getStorage(`${storageKey}`)["projectName"];
	}

	newProjectContainer.appendChild(newProjectDiv);
	newProjectDiv.appendChild(title);
	newProjectDiv.appendChild(error);
	newProjectDiv.appendChild(projectForm);
	projectForm.appendChild(projectNameInputLabel);
	projectForm.appendChild(projectNameInput);
	projectForm.appendChild(buttonSelectorDiv);
	projectForm.appendChild(cancelButton);
	projectForm.appendChild(submitButton);

	projectForm.addEventListener("submit", function (e) {
		createProject(e, projectNameInput, storageKey);
	});

	cancelButton.addEventListener("click", function () {
		closeWindow(newProjectContainer);
	});

	return newProjectContainer;
}

function recall(selectedProject = null, completed = null) {
	const projectsDiv = document.getElementById("projects-div");
	const taskDiv = document.getElementById("main-task-div");
	let totalNumberOfTasks = 0;
	const allProjectCount = document.body.querySelector(`.project-list[data-value=P0]`);

	for (let i = 0; i < localStorage.length; i++) {
		let storageKey = localStorage.key(i);
		let storageObject = pageState.getStorage(storageKey);
		if (storageObject["type"] == "project" && storageKey != "P0") {
			let restoredProject = newProject(storageObject);
			projectsDiv.appendChild(restoredProject);
		} else if (storageObject["type"] == "task") {
			if (storageObject["complete"] == false) {
				totalNumberOfTasks += 1;
				let restoredTask = newTask(storageObject);
				taskDiv.appendChild(restoredTask);
			}
		}
	}

	allProjectCount.childNodes[1].textContent = totalNumberOfTasks;
}

export { home, recall, newProject, dropDownOptionForProjects, displayNewProjectWindow };
