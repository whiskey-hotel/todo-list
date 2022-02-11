import { closeWindow, removeAllChildNodes } from "./DOMController";
import { projects, tasks } from "./objectFactory";
import { pageState } from "./storage";
import { updateDOMForDeletingTask } from "./taskCountTracking";
import { newTask } from "./taskHandler";
import { newProject } from "./elementBuilder";

function displayAllProjectTasks(e) {
	let dataValue = e.target.dataset.value;
	let projectObj = pageState.getStorage(dataValue);
	if (projectObj) {
		const parent = document.getElementById("main-task-div");
		removeAllChildNodes(parent);

		const title = document.getElementById("project-title-for-task-list");
		title.textContent = projectObj.projectName;

		for (let i = 0; localStorage.key(i); i++) {
			let storageKey = localStorage.key(i);
			let storageObject = pageState.getStorage(storageKey);
			if (storageObject.type == "task") {
				let restoredTask = newTask(storageObject);
				parent.appendChild(restoredTask);
			}
		}
	}
}

function displaySelectedProjectTasks(e) {
	let dataValue = e.target.dataset.value;
	let projectObj = pageState.getStorage(dataValue);
	if (projectObj) {
		const parent = document.getElementById("main-task-div");
		removeAllChildNodes(parent);
		const title = document.getElementById("project-title-for-task-list");
		title.textContent = projectObj.projectName;

		for (let i = 0; localStorage.key(i); i++) {
			let storageKey = localStorage.key(i);
			let storageObject = pageState.getStorage(storageKey);
			if (storageObject.type == "task" && storageObject.projectKey == projectObj.key) {
				let restoredTask = newTask(storageObject);
				parent.appendChild(restoredTask);
			}
		}
	}
}

function removeAllTasks(storageKey) {
	const mainTaskDiv = document.getElementById("main-task-div");

	let projectName = pageState.getStorage(storageKey)["projectName"];
	for (let i = 0; i < localStorage.length; i++) {
		let taskKey = localStorage.key(i);
		let taskObject = pageState.getStorage(taskKey);
		if (taskObject["type"] == "task" && taskObject["projectName"] == projectName) {
			let deletedTask = document.body.querySelector(`.task-list[data-value=${taskKey}`);
			mainTaskDiv.removeChild(deletedTask);
			updateDOMForDeletingTask(taskObject.projectKey);
			tasks().deleteTask(taskKey);
		}
	}
}

function projectValidation(projectNameValue) {
	let errorArray = [];
	if (projectNameValue.toLowerCase() == "all") {
		errorArray.push("Cannot use 'All' as a project name");
	}
	if (projectNameValue === "" || projectNameValue == null) {
		errorArray.push("Name is required");
	}
	return errorArray;
}

function createProject(e, projectNameInput, storageKey, newProjectContainer) {
	const errorField = document.getElementById("project-name-error");
	const projectsDiv = document.getElementById("projects-div");
	let projectNameValue = projectNameInput.value;

	let messages = projectValidation(projectNameValue);

	if (messages.length > 0) {
		e.preventDefault();
		errorField.textContent = messages.join(", ");
	} else {
		let instantiateProjectObject = projects(projectNameValue);
		if (storageKey) {
			const updateProjectDiv = document.body.querySelector(`.project-list[data-value=${storageKey}]`);
			updateProjectDiv.childNodes[0].textContent = projectNameValue;
			instantiateProjectObject.update(storageKey, projectNameValue);
		} else {
			let newProjectObject = instantiateProjectObject.create();
			let newElement = newProject(newProjectObject);
			projectsDiv.appendChild(newElement);
		}
		closeWindow(newProjectContainer);
	}
}

function removeProject(storageKey){
	const mainProjectsDiv = document.getElementById("projects-div");
	const deletedProject = document.body.querySelector(`.project-list[data-value=${storageKey}`);
	removeAllTasks(storageKey);
	projects().deleteProject(storageKey);
	mainProjectsDiv.removeChild(deletedProject);
}

export { displayAllProjectTasks, displaySelectedProjectTasks, removeAllTasks, createProject, removeProject };
