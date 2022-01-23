import { newElement, sendToBody, closeWindow, removeAllChildNodes } from "./DOMController";
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

	cancelButton.addEventListener("click", function () {
		closeWindow(newProjectContainer);
	});

	submitButton.addEventListener("click", function () {
		const projectsDiv = document.getElementById("projects-div");
		let projectNameValue = projectNameInput.value;
		let instantiateProjectObject = projects(projectNameValue);
		let newProject = instantiateProjectObject.create();
		projectsDiv.appendChild(newProject);
		closeWindow(newProjectContainer);
	});

	return newProjectContainer;
}

function displayNewTaskWindow() {
	const newTaskContainer = newElement("div", ...Array(1), "new-task-form-container");
	const newTaskDiv = newElement("div", ...Array(1), "new-task-form-div");
	const title = newElement("h2", "pop-up-window-title", ...Array(1), "New Task");

	const form = newElement("form", ...Array(1), "task-form");

	const taskNameInput = newElement("input", "form-input", "task-name-input");
	taskNameInput.type = "text";
	const taskNameInputLabel = newElement("label", "form-labels", ...Array(1), "Task:");
	taskNameInputLabel.setAttribute("for", "task-name-input");

	const taskNotesInput = newElement("input", "form-input", "task-notes-input");
	taskNotesInput.type = "text";
	const taskNotesInputLabel = newElement("label", "form-labels", ...Array(1), "Notes:");
	taskNotesInputLabel.setAttribute("for", "task-notes-input");

	const projectNameSelect = newElement("select", "form-selection", "project-name-selection");
	const dataAtts = document.getElementsByClassName("project-list");
	Array.from(dataAtts).forEach((d) => {
		const projectNameSelectOption = newElement("option");
		const nameFromStorage = pageState.getStorage(d.dataset.value);
		projectNameSelectOption.setAttribute("value", nameFromStorage.projectName);
		projectNameSelectOption.textContent = nameFromStorage.projectName;
		projectNameSelect.appendChild(projectNameSelectOption);
	});

	const projectNameSelectLabel = newElement("label", "form-labels", ...Array(1), "Select a project");
	projectNameSelectLabel.setAttribute("for", "project-name-selection");

	const dateDiv = newElement("div", "date-time", "date");

	const dateRadioYes = newElement("input", ...Array(1), "include-date");
	dateRadioYes.type = "Radio";
	const dateRadioYesLabel = newElement("label", "form-labels", ...Array(1), "Yes");
	dateRadioYesLabel.setAttribute("for", "include-date");

	const dateRadioNo = newElement("input", ...Array(1), "dont-include-date");
	dateRadioNo.type = "Radio";
	dateRadioNo.checked = true;
	const dateRadioNoLabel = newElement("label", "form-labels", ...Array(1), "No");
	dateRadioNoLabel.setAttribute("for", "dont-include-date");

	const dateInput = newElement("input", "form-input", "task-date-input");
	dateInput.type = "text";
	dateInput.disabled = true;
	const dateInputLabel = newElement("label", "form-labels", ...Array(1), "Date:");
	dateInputLabel.setAttribute("for", "task-date-input");

	////////////////////

	const timeDiv = newElement("div", "date-time", "time");

	const timeRadioYes = newElement("input", ...Array(1), "include-time");
	timeRadioYes.type = "Radio";
	const timeRadioYesLabel = newElement("label", "form-labels", ...Array(1), "Yes");
	timeRadioYesLabel.setAttribute("for", "include-time");

	const timeRadioNo = newElement("input", ...Array(1), "dont-include-time");
	timeRadioNo.type = "Radio";
	timeRadioNo.checked = true;
	const timeRadioNoLabel = newElement("label", "form-labels", ...Array(1), "No");
	timeRadioNoLabel.setAttribute("for", "dont-include-time");

	const timeInput = newElement("input", "form-input", "task-time-input");
	timeInput.type = "text";
	timeInput.disabled = true;
	const timeInputLabel = newElement("label", "form-labels", ...Array(1), "Time:");
	timeInputLabel.setAttribute("for", "task-time-input");

	const buttonSelectorDiv = newElement("div", ...Array(1), "button-selector-div");
	const cancelButton = newElement("button", "button", "task-cancel-button", "Cancel");
	const submitButton = newElement("input", "button", "task-submit-button");
	submitButton.type = "submit";
	submitButton.value = "OK";
	submitButton.setAttribute("for", "task-form");

	newTaskContainer.appendChild(newTaskDiv);
	newTaskDiv.appendChild(title);
	newTaskDiv.appendChild(form);
	form.appendChild(taskNameInputLabel);
	form.appendChild(taskNameInput);
	form.appendChild(projectNameSelectLabel);
	form.appendChild(projectNameSelect);
	form.appendChild(taskNotesInputLabel);
	form.appendChild(taskNotesInput);
	form.appendChild(dateDiv);
	dateDiv.appendChild(dateInputLabel);
	dateDiv.appendChild(dateInput);
	dateDiv.appendChild(dateRadioYesLabel);
	dateDiv.appendChild(dateRadioYes);
	dateDiv.appendChild(dateRadioNoLabel);
	dateDiv.appendChild(dateRadioNo);
	form.appendChild(timeDiv);
	timeDiv.appendChild(timeInputLabel);
	timeDiv.appendChild(timeInput);
	timeDiv.appendChild(timeRadioYesLabel);
	timeDiv.appendChild(timeRadioYes);
	timeDiv.appendChild(timeRadioNoLabel);
	timeDiv.appendChild(timeRadioNo);
	newTaskDiv.appendChild(buttonSelectorDiv);
	buttonSelectorDiv.appendChild(cancelButton);
	buttonSelectorDiv.appendChild(submitButton);

	dateRadioYes.addEventListener("click", () => {
		if (dateRadioYes.checked) {
			dateRadioNo.checked = false;
			dateInput.disabled = false;
		}
	});

	dateRadioNo.addEventListener("click", () => {
		if (dateRadioNo.checked) {
			dateRadioYes.checked = false;
			dateInput.disabled = true;
		}
	});

	timeRadioYes.addEventListener("click", () => {
		if (timeRadioYes.checked) {
			timeRadioNo.checked = false;
			timeInput.disabled = false;
		}
	});

	timeRadioNo.addEventListener("click", () => {
		if (timeRadioNo.checked) {
			timeRadioYes.checked = false;
			timeInput.disabled = true;
		}
	});

	cancelButton.addEventListener("click", function () {
		closeWindow(newTaskContainer);
	});

	submitButton.addEventListener("click", function () {
		const taskDiv = document.getElementById("main-task-div");
		let taskNameValue = taskNameInput.value;
		let taskProjectNameValue = projectNameSelect.value;
		let taskNotesValue = taskNotesInput.value;
		let taskDateValue = "";
		let taskTimeValue = "";
		if (dateInput) {
			taskDateValue = dateInput.value;
		}
		if (timeInput) {
			taskTimeValue = timeInput.value;
		}
		let instantiateTaskObject = tasks(taskNameValue, taskProjectNameValue, taskNotesValue, taskDateValue, taskTimeValue);
		let newTask = instantiateTaskObject.create();
		taskDiv.appendChild(newTask);
		closeWindow(newTaskContainer);
	});

	return newTaskContainer;
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
	document.addEventListener(
		"click",
		function (e) {
			if (document.getElementById("drop-down") && !document.getElementById("drop-down").contains(e.target) && e.target != more) {
				newTask.removeChild(document.getElementById("drop-down"));
			}
		},
		true
	);

	updateButton.addEventListener("click", function () {
		newTask.removeChild(dropDownDiv);
	});

	deleteButton.addEventListener("click", function () {
		newTask.removeChild(dropDownDiv);
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

export { home, displayNewProjectWindow, displayNewTaskWindow, newProject, newTask, recall };
