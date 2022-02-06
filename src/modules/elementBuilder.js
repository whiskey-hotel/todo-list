import { newElement, sendToBody } from "./DOMController";
import { newTask, displayNewTaskWindow } from "./taskHandler";
import { newProject, displayNewProjectWindow } from "./projectHandler";
import { pageState } from "./storage";
import { staticTaskCount } from "./taskCountTracking";
import { projects } from "./objectFactory";

function home() {
	const projectsContainer = newElement("div", "projects-container");
	const projectsDiv = newElement("div", ...Array(1), "projects-div");
	const projectHeader = newElement("div", "header");
	const projectTitle = newElement("h1", "title", ...Array(1), "My Projects");
	const mainList = newElement("div", "project-list", "all-list");
	mainList.setAttribute("data-value", "P0");
	const instantiateMainProject = projects("All");
	let mainListObj = instantiateMainProject.create();
	const listTitle = newElement("h3", "project-title", ...Array(1), "All");
	const numberOfTasks = newElement("span", "number-of-tasks", `P0-task-count`, mainListObj.numberOfTasks);

	const taskContainer = newElement("div", "task-container");
	const taskDiv = newElement("div", ...Array(1), "task-div");
	const taskHeader = newElement("div", "header");
	const taskTitle = newElement("h2", "title", ...Array(1), mainListObj.projectName);
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
	taskDiv.appendChild(taskListDiv);
	taskContainer.appendChild(addTaskDiv);
	addTaskDiv.appendChild(addTaskIcon);

	addProjectDiv.addEventListener("click", function () {
		sendToBody(displayNewProjectWindow());
	});

	addTaskIcon.addEventListener("click", function () {
		sendToBody(displayNewTaskWindow());
	});

	return { projectsContainer, taskContainer };
}

function recall() {
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
			totalNumberOfTasks += 1;
			let restoredTask = newTask(storageObject);
			taskDiv.appendChild(restoredTask);
		}
	}

	allProjectCount.childNodes[1].textContent = totalNumberOfTasks;
}

export { home, recall };
