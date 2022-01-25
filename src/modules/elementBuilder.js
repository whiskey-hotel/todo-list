import { newElement, sendToBody} from "./DOMController";
import { displayNewProjectWindow, displayNewTaskWindow } from "./formWindows";
import { projects, tasks } from "./projectLists";
import { pageState } from "./storage";

function home() {
	const projectsContainer = newElement("div", "projects-container");
	const projectsDiv = newElement("div", ...Array(1), "projects-div");
	const projectHeader = newElement("div", "header");
	const projectTitle = newElement("h1", "title", ...Array(1), "My Projects");
	const mainList = newElement("div", "project-list", "all-list");
	mainList.setAttribute("data-value", "P0");
	pageState.populateProjectStorage("P0", "All", 0, "project");
	const listTitle = newElement("h3", "project-title", ...Array(1), "All");
	const numberOfTasks = newElement("span", "number-of-tasks", ...Array(1), "0");

	const taskContainer = newElement("div", "task-container");
	const taskDiv = newElement("div", ...Array(1), "task-div");
	const taskHeader = newElement("div", "header");
	const taskTitle = newElement("h2", "title", ...Array(1), "All");
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

function newProject(name, storageKey, numberOfTasks) {
	const modifiedNameForID = name.replace(/\s/g, "");
	const newProject = newElement("div", "project-list", `${modifiedNameForID}-list`);
	newProject.setAttribute("data-value", storageKey);
	const newListTitle = newElement("h3", "project-title", ...Array(1), `${name}`);
	const numberOfTasksElement = newElement("span", "number-of-tasks", ...Array(1), `${numberOfTasks}`);

	newProject.appendChild(newListTitle);
	newProject.appendChild(numberOfTasksElement);

	return newProject;
}

function newTask(storageKey, project, task, notes = "", day = "", time = "", complete) {
	const newTask = newElement("div", "task-list");
	newTask.setAttribute("data-value", storageKey);
	const newTaskCheckMark = newElement("input", "task-checkmark");
	newTaskCheckMark.type = "radio";
	if (complete) {
		newTaskCheckMark.checked = true;
	}
	const newTaskDetails = newElement("div", "task-info-container");
	const newTaskTitle = newElement("h3", "task-title", ...Array(1), task);
	const newTaskNotesDiv = newElement("div", "task-notes-div");
	const newTaskNotes = newElement("p", "task-notes", ...Array(1), notes);
	const newDateTimeDiv = newElement("div", "task-date-time-div");
	const newTaskDay = newElement("p", "task-date", ...Array(1), day);
	const newTasktime = newElement("p", "task-time", ...Array(1), time);

	newTaskCheckMark.addEventListener("click", function () {
		complete = !complete;
		tasks(task, project, notes, day, time).store(storageKey, "task", complete);

		if (complete) {
			newTaskCheckMark.checked;
		} else {
			newTaskCheckMark.checked = false;
		}
	});

	const moreInfoIcon = newElement("span", "material-icons-outlined", `info-icon-${storageKey}`, "info");
	moreInfoIcon.classList.add("more-info-icon");
	newTask.addEventListener("mouseover", function () {
		moreInfoIcon.style.display = "inline-block";
	});

	newTask.addEventListener("mouseout", function () {
		moreInfoIcon.style.display = "none";
	});

	moreInfoIcon.addEventListener("click", function () {
		const dropDownDiv = dropDownOption(storageKey);
		newTask.appendChild(dropDownDiv);
	});

	newTask.appendChild(newTaskCheckMark);
	newTask.appendChild(newTaskDetails);
	newTaskDetails.appendChild(newTaskTitle);
	newTaskDetails.appendChild(newTaskNotesDiv);
	newTaskNotesDiv.appendChild(newTaskNotes);
	newTaskDetails.appendChild(newDateTimeDiv);
	newDateTimeDiv.appendChild(newTaskDay);
	newDateTimeDiv.appendChild(newTasktime);
	newTask.appendChild(moreInfoIcon);

	return newTask;
}

function dropDownOption(storageKey) {
	const dropDownDiv = newElement("div", "drop-down-content", "drop-down");
	const updateButton = newElement("span", "drop-down-option", `task${storageKey}-update-button`, "Edit");
	const deleteButton = newElement("span", "drop-down-option", `task${storageKey}-delete-button`, "Delete");
	updateButton.setAttribute("data-value", storageKey);
	deleteButton.setAttribute("data-value", storageKey);

	let newTask = document.body.querySelector(`.task-list[data-value=${storageKey}]`);
	let more = document.body.querySelector(`#info-icon-${storageKey}`);

	/* This behavior is unexpected. looping through all storagekeys instead of just the one storage
        key associated with the clicked element. error occurs in the console at every execution */
	document.addEventListener("click", function (e) {
		if (document.getElementById("drop-down") && !document.getElementById("drop-down").contains(e.target) && e.target != more) {
			newTask.removeChild(document.getElementById("drop-down"));
		}
	});

	updateButton.addEventListener("click", function () {
		sendToBody(displayNewTaskWindow(storageKey));
		newTask.removeChild(dropDownDiv);
	});

	deleteButton.addEventListener("click", function () {
		const mainTaskDiv = document.getElementById("main-task-div");
		const deletedTask = document.body.querySelector(`.task-list[data-value=${storageKey}`);
		tasks().deleteTask(storageKey);
		mainTaskDiv.removeChild(deletedTask);
		// newTask.removeChild(dropDownDiv);
	});

	dropDownDiv.appendChild(updateButton);
	dropDownDiv.appendChild(deleteButton);

	return dropDownDiv;
}

function recall() {
	const projectsDiv = document.getElementById("projects-div");
	const taskDiv = document.getElementById("main-task-div");

	for (let i = 0; i < localStorage.length; i++) {
		let storageObject = pageState.getStorage(localStorage.key(i));
		let storageKey = localStorage.key(i);
		if (storageObject["type"] == "project" && storageKey != "P0") {
			let restoredProject = newProject(storageObject["projectName"], storageKey, storageObject["numberOfTasks"]);
			projectsDiv.appendChild(restoredProject);
		} else if (storageObject["type"] == "task") {
			let restoredTask = newTask(
				storageKey,
				storageObject["projectName"],
				storageObject["taskName"],
				storageObject["notes"],
				storageObject["day"],
				storageObject["time"],
				storageObject["complete"]
			);
			taskDiv.appendChild(restoredTask);
		}
	}
}

export { home, newProject, newTask, dropDownOption, recall };
