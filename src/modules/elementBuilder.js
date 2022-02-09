import { newElement, sendToBody, removeAllChildNodes } from "./DOMController";
import { newTask, displayNewTaskWindow, showHideCompletedTasks } from "./taskHandler";
import { newProject, displayNewProjectWindow, displayAllProjectTasks } from "./projectHandler";
import { pageState } from "./storage";
import { staticTaskCount } from "./taskCountTracking";
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
		showCompleted = showHideCompletedTasks(showCompleted)
	});

	return { projectsContainer, taskContainer };
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

export { home, recall };
