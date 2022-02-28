import { newElement, sendToBody, closeWindow } from "./DOMController";
import { showHideCompletedTasks, completedTask, createTask, removeTask } from "./taskHandler";
import { displayAllProjectTasks, displaySelectedProjectTasks, createProject, removeProject } from "./projectHandler";
import { pageState } from "./storage";
import { dateFormatter, timeFormatter, timeCheck } from "./dateTime";
import { updateDOMForTotalCompletedTasks, updateDOMForCompletedTask } from "./taskCountTracking";
import { projects } from "./objectFactory";

function home(mainObj) {
	const projectsContainer = newElement("div", "projects-container");
	const projectsDiv = newElement("div", ...Array(1), "projects-div");
	const projectHeader = newElement("div", "header");
	const projectTitle = newElement("h1", "title", ...Array(1), "My Projects");
	const mainList = newElement("div", "project-list", "all-list");
	mainList.setAttribute("data-value", "P0");
	const projectInfoDiv = newElement("div", "project-info-div");
	const listTitle = newElement("h3", "project-title", ...Array(1), "All");
	const numberOfTasks = newElement("span", "number-of-tasks", `P0-task-count`, `${mainObj.incompleteTasks}`);
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
	mainList.appendChild(projectInfoDiv)
	projectInfoDiv.appendChild(listTitle);
	projectInfoDiv.appendChild(numberOfTasks);
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

	completedDiv.addEventListener("click", function () {
		showHideCompletedTasks();
	});

	return { projectsContainer, taskContainer };
}

function newProject(obj) {
	const name = obj.projectName;
	const storageKey = obj.key;
	const numberOfTasks = obj.incompleteTasks;

	const modifiedNameForID = name.replace(/\s/g, "");
	const newProject = newElement("div", "project-list", `${modifiedNameForID}-list`);
	newProject.setAttribute("data-value", storageKey);
	const projectInfoDiv = newElement("div", "project-info-div");
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

	newProject.appendChild(projectInfoDiv);
	projectInfoDiv.appendChild(newListTitle);
	projectInfoDiv.appendChild(numberOfTasksElement);
	newProject.appendChild(moreInfoIcon);

	return newProject;
}

function dropDownOptionForProjects(storageKey) {
	const dropDownDiv = newElement("div", "drop-down-project-content", `drop-down-${storageKey}`);
	const updateButton = newElement("span", "drop-down-project-option", `task${storageKey}-update-button`, "Rename");
	const deleteButton = newElement("span", "drop-down-project-option", `task${storageKey}-delete-button`, "Delete");
	updateButton.setAttribute("data-value", storageKey);
	deleteButton.setAttribute("data-value", storageKey);

	let newProject = document.body.querySelector(`.project-list[data-value=${storageKey}]`);
	let more = document.body.querySelector(`#info-icon-${storageKey}`);

	/* This behavior is unexpected. looping through all storagekeys instead of just the one storage
        key associated with the clicked element. error occurs in the console at every execution */
	document.addEventListener("click", function (e) {
		if (document.getElementById(`drop-down-${storageKey}`) && !document.getElementById(`drop-down-${storageKey}`).contains(e.target) && e.target != more) {
			newProject.removeChild(document.getElementById(`drop-down-${storageKey}`));
		}
	});

	updateButton.addEventListener("click", function () {
		//need to rename associated task projectname
		sendToBody(displayNewProjectWindow(storageKey));
		newProject.removeChild(dropDownDiv);
	});

	deleteButton.addEventListener("click", function () {
		removeProject(storageKey);
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
		e.preventDefault();
		createProject(e, projectNameInput, storageKey, newProjectContainer);
	});

	cancelButton.addEventListener("click", function () {
		closeWindow(newProjectContainer);
	});

	return newProjectContainer;
}

function newTask(obj) {
	let storageKey = obj.key;
	let projectKey = obj.projectKey;
	let task = obj.taskName;
	let notes = obj.notes;
	let day = obj.day;
	let time = obj.time;
	let complete = obj.complete;
	let isTaskExpired;

	if (day || time) {
		isTaskExpired = timeCheck(day, time);
	}

	if (day) {
		day = dateFormatter(day);
	}
	if (time) {
		time = timeFormatter(time);
	}

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
	if (isTaskExpired) {
		newTaskDay.style.color = "red";
		newTasktime.style.color = "red";
	}

	newTaskCheckMark.addEventListener("click", function () {
		complete = completedTask(complete, obj);
		const taskDiv = document.getElementById("main-task-div");
		const taskChild = document.querySelector(`.task-list[data-value=${storageKey}`);
		const timer1 = () => {
			setTimeout(function () {
				taskDiv.removeChild(taskChild);
			}, 2000);
		};

		if (complete) {
			newTaskCheckMark.checked;
			projects().updateNumberOfTasks(projectKey, "dec");
			updateDOMForTotalCompletedTasks();
			updateDOMForCompletedTask(projectKey);
			!projects().getCompletedStatus() ? timer1() : null;
		} else {
			newTaskCheckMark.checked = false;
			projects().updateNumberOfTasks(projectKey);
			updateDOMForTotalCompletedTasks("dec");
			updateDOMForCompletedTask(projectKey, "inc");
			clearTimeout(timer1);
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
		const dropDownDiv = dropDownOptionForTasks(storageKey);
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

function dropDownOptionForTasks(storageKey) {
	const dropDownDiv = newElement("div", "drop-down-task-content", `drop-down-${storageKey}`);
	const updateButton = newElement("span", "drop-down-task-option", `task${storageKey}-update-button`, "Edit");
	const deleteButton = newElement("span", "drop-down-task-option", `task${storageKey}-delete-button`, "Delete");
	updateButton.setAttribute("data-value", storageKey);
	deleteButton.setAttribute("data-value", storageKey);

	let newTask = document.body.querySelector(`.task-list[data-value=${storageKey}]`);
	let more = document.body.querySelector(`#info-icon-${storageKey}`);

	/* This behavior is unexpected. looping through all storagekeys instead of just the one storage
        key associated with the clicked element. error occurs in the console at every execution */
	document.addEventListener("click", function (e) {
		if (document.getElementById(`drop-down-${storageKey}`) && !document.getElementById(`drop-down-${storageKey}`).contains(e.target) && e.target != more) {
			newTask.removeChild(document.getElementById(`drop-down-${storageKey}`));
		}
	});

	updateButton.addEventListener("click", function () {
		sendToBody(displayNewTaskWindow(storageKey));
		newTask.removeChild(dropDownDiv);
	});

	deleteButton.addEventListener("click", function () {
		removeTask(storageKey);
	});

	dropDownDiv.appendChild(updateButton);
	dropDownDiv.appendChild(deleteButton);

	return dropDownDiv;
}

function displayNewTaskWindow(storageKey = null) {
	const newTaskContainer = newElement("div", ...Array(1), "new-task-form-container");
	const newTaskDiv = newElement("div", ...Array(1), "new-task-form-div");
	const title = newElement("h2", "pop-up-window-title", ...Array(1), "New Task");

	const error = newElement("div", ...Array(1), "task-name-error");
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
	for (let i = 0; localStorage.key(i); i++) {
		let storageKey = localStorage.key(i);
		let storageObject = pageState.getStorage(storageKey);
		if (storageObject["type"] == "project") {
			const projectNameSelectOption = newElement("option");
			projectNameSelectOption.setAttribute("value", storageObject.projectName);
			projectNameSelectOption.setAttribute("data", storageObject.key);
			projectNameSelectOption.textContent = storageObject.projectName;
			projectNameSelect.appendChild(projectNameSelectOption);
		}
	}

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
	dateInput.type = "date";
	dateInput.disabled = true;
	const dateInputLabel = newElement("label", "form-labels", ...Array(1), "Date:");
	dateInputLabel.setAttribute("for", "task-date-input");

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
	timeInput.type = "time";
	timeInput.disabled = true;
	const timeInputLabel = newElement("label", "form-labels", ...Array(1), "Time:");
	timeInputLabel.setAttribute("for", "task-time-input");

	const buttonSelectorDiv = newElement("div", ...Array(1), "button-selector-div");
	const cancelButton = newElement("button", "button", "task-cancel-button", "Cancel");
	const submitButton = newElement("input", "button", "task-submit-button");
	submitButton.type = "submit";
	submitButton.value = "OK";
	submitButton.setAttribute("for", "task-form");

	if (storageKey) {
		taskNameInput.value = pageState.getStorage(`${storageKey}`)["taskName"];
		taskNotesInput.value = pageState.getStorage(`${storageKey}`)["notes"];
		projectNameSelect.value = pageState.getStorage(`${storageKey}`)["projectName"];

		if (pageState.getStorage(`${storageKey}`).day) {
			dateRadioYes.checked = true;
			dateRadioNo.checked = false;
			dateInput.disabled = false;
			dateInput.value = pageState.getStorage(`${storageKey}`).day;
		}
		if (pageState.getStorage(`${storageKey}`).time) {
			timeRadioYes.checked = true;
			timeRadioNo.checked = false;
			timeInput.disabled = false;
			timeInput.value = pageState.getStorage(`${storageKey}`).time;
		}
	}

	newTaskContainer.appendChild(newTaskDiv);
	newTaskDiv.appendChild(title);
	newTaskDiv.appendChild(error);
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
	form.appendChild(buttonSelectorDiv);
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
			timeRadioYes.checked = false;
			timeRadioNo.checked = true;
			timeInput.disabled = true;
		}
	});

	timeRadioYes.addEventListener("click", () => {
		if (timeRadioYes.checked) {
			timeRadioNo.checked = false;
			timeInput.disabled = false;
			dateRadioNo.checked = false;
			dateRadioYes.checked = true;
			dateInput.disabled = false;
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

	form.addEventListener("submit", function (e) {
		e.preventDefault();
		createTask(e, storageKey, newTaskContainer, taskNameInput, projectNameSelect, taskNotesInput, dateInput, dateRadioNo, timeInput, timeRadioNo);
	});

	return newTaskContainer;
}

export { home, newProject, dropDownOptionForProjects, displayNewProjectWindow, newTask };
