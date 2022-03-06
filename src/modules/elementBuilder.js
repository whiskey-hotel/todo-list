import { newElement, sendToBody, closeWindow } from "./DOMController";
import { showHideCompletedTasks, completedTask, createTask, removeTask } from "./taskHandler";
import { displayAllProjectTasks, displaySelectedProjectTasks, createProject, removeProject } from "./projectHandler";
import { pageState } from "./storage";
import { dateFormatter, timeFormatter, timeCheck } from "./dateTime";
import { updateDOMForTotalCompletedTasks, updateDOMForCompletedTask } from "./taskCountTracking";
import { projects } from "./objectFactory";

function home(mainObj) {
	const projectsContainer = newElement({
		element: "div",
		className: "projects-container",
	});

	const projectsDiv = newElement({
		element: "div",
		elementID: "projects-div",
	});

	const projectHeader = newElement({
		element: "div",
		className: "header",
	});

	const projectTitle = newElement({
		element: "h1",
		className: "title",
		text: "My Projects",
	});

	const mainList = newElement({
		element: "div",
		className: "project-list",
		elementID: "all-list",
	});

	mainList.setAttribute("data-value", "P0");

	const projectInfoDiv = newElement({
		element: "div",
		className: "project-info-div",
	});

	const listTitle = newElement({
		element: "h3",
		className: "project-title",
		text: "All",
	});

	const numberOfTasks = newElement({
		element: "span",
		className: "number-of-tasks",
		elementID: `P0-task-count`,
		text: `${mainObj.incompleteTasks}`,
	});

	const taskContainer = newElement({
		element: "div",
		className: "task-container",
	});

	const taskDiv = newElement({
		element: "div",
		elementID: "task-div",
	});

	const taskHeader = newElement({
		element: "div",
		className: "header",
	});

	const taskTitle = newElement({
		element: "h2",
		className: "title",
		elementID: "project-title-for-task-list",
		text: mainObj.projectName,
	});

	const completedDiv = newElement({
		element: "div",
		elementID: "completed-task-div",
	});

	const countOfCompletedTasksContainer = newElement({
		element: "div",
		elementID: "completed-task-count-container",
	});

	const completedTasks = newElement({
		element: "span",
		elementID: "completed-task-count-text",
		text: "Completed Tasks:",
	});

	const countOfCompletedTasks = newElement({
		element: "span",
		elementID: "completed-task-count",
		text: "0",
	});

	const showCompletedTasks = newElement({
		element: "p",
		elementID: "show-hide-btn",
		text: "Show/Hide Completed Tasks",
	});

	const taskListDiv = newElement({
		element: "div",
		className: "task-list-div",
		elementID: "main-task-div",
	});

	const addProjectDiv = newElement({
		element: "div",
		elementID: "add-project-div",
	});

	const addProjectIcon = newElement({
		element: "span",
		className: "material-icons-outlined",
		elementID: "add-project-icon",
		text: "add_circle_outline",
	});

	const addProject = newElement({
		element: "span",
		elementID: "add-project",
		text: "Add Project",
	});

	const addTaskDiv = newElement({
		element: "div",
		elementID: "add-task-div",
	});

	const addTaskIcon = newElement({
		element: "span",
		className: "material-icons-outlined",
		elementID: "add-task-icon",
		text: "add_circle",
	});

	projectsContainer.appendChild(projectHeader);
	projectsContainer.appendChild(projectsDiv);
	projectHeader.appendChild(projectTitle);
	projectsDiv.appendChild(mainList);
	mainList.appendChild(projectInfoDiv);
	projectInfoDiv.appendChild(listTitle);
	projectInfoDiv.appendChild(numberOfTasks);
	projectsContainer.appendChild(addProjectDiv);
	addProjectDiv.appendChild(addProjectIcon);
	addProjectDiv.appendChild(addProject);

	taskContainer.appendChild(taskDiv);
	taskDiv.appendChild(taskHeader);
	taskHeader.appendChild(taskTitle);
	taskDiv.appendChild(completedDiv);
	completedDiv.appendChild(countOfCompletedTasksContainer);
	countOfCompletedTasksContainer.appendChild(completedTasks);
	countOfCompletedTasksContainer.appendChild(countOfCompletedTasks);
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
	const { projectName: name, key: storageKey, incompleteTasks: numberOfTasks } = obj;

	const modifiedNameForID = name.replace(/\s/g, "");

	const newProject = newElement({
		element: "div",
		className: "project-list",
		elementID: `${modifiedNameForID}-list`,
	});

	newProject.setAttribute("data-value", storageKey);

	const projectInfoDiv = newElement({
		element: "div",
		className: "project-info-div",
	});

	const newListTitle = newElement({
		element: "h3",
		className: "project-title",
		text: `${name}`,
	});

	const numberOfTasksElement = newElement({
		element: "span",
		className: "number-of-tasks",
		elementID: `${storageKey}-task-count`,
		text: `${numberOfTasks}`,
	});

	const moreInfoIcon = newElement({
		element: "span",
		className: "material-icons-outlined",
		elementID: `info-icon-${storageKey}`,
		text: "info",
	});

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
	const dropDownDiv = newElement({
		element: "div",
		className: "drop-down-project-content",
		elementID: `drop-down-${storageKey}`,
	});

	const updateButton = newElement({
		element: "span",
		className: "drop-down-project-option",
		elementID: `task${storageKey}-update-button`,
		text: "Rename",
	});

	const deleteButton = newElement({
		element: "span",
		className: "drop-down-project-option",
		elementID: `task${storageKey}-delete-button`,
		text: "Delete",
	});

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
	const newProjectContainer = newElement({
		element: "div",
		elementID: "new-project-form-container",
	});

	const newProjectDiv = newElement({
		element: "div",
		elementID: "new-project-form-div",
	});

	const title = newElement({
		element: "h2",
		className: "pop-up-window-title",
		text: "New Project",
	});

	const error = newElement({
		element: "div",
		elementID: "project-name-error",
	});

	const projectForm = newElement({
		element: "form",
		elementID: "project-form",
	});

	const projectNameInputLabel = newElement({
		element: "label",
		className: "form-labels",
		text: "Name:",
	});

	const projectNameInput = newElement({
		element: "input",
		className: "form-input",
		elementID: "project-name-input",
	});

	projectNameInput.type = "text";
	projectNameInput.placeholder = "Name";
	projectNameInputLabel.setAttribute("for", "project-name-input");

	const buttonSelectorDiv = newElement({
		element: "div",
		elementID: "project-button-selector-div",
	});

	const cancelButton = newElement({
		element: "button",
		className: "button",
		elementID: "project-cancel-button",
		text: "Cancel",
	});

	const submitButton = newElement({
		element: "input",
		className: "button",
		elementID: "project-submit-button",
	});

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
	// projectForm.appendChild(projectNameInputLabel);
	projectForm.appendChild(projectNameInput);
	projectForm.appendChild(buttonSelectorDiv);
	buttonSelectorDiv.appendChild(cancelButton);
	buttonSelectorDiv.appendChild(submitButton);

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
	let { key: storageKey, projectKey, taskName: task, notes, day, time, complete } = obj;
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

	const newTask = newElement({
		element: "div",
		className: "task-list",
	});

	newTask.setAttribute("data-value", storageKey);

	const newTaskCheckMark = newElement({
		element: "input",
		className: "task-checkmark",
	});

	newTaskCheckMark.type = "radio";
	if (complete) {
		newTaskCheckMark.checked = true;
	}
	const newTaskDetails = newElement({
		element: "div",
		className: "task-info-container",
	});

	const newTaskTitle = newElement({
		element: "h3",
		className: "task-title",
		text: task,
	});

	const newTaskNotesDiv = newElement({
		element: "div",
		className: "task-notes-div",
	});

	const newTaskNotes = newElement({
		element: "p",
		className: "task-notes",
		text: notes,
	});

	const newDateTimeDiv = newElement({
		element: "div",
		className: "task-date-time-div",
	});

	const newTaskDay = newElement({
		element: "p",
		className: "task-date",
		text: day,
	});

	const newTasktime = newElement({
		element: "p",
		className: "task-time",
		text: time,
	});

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

	const moreInfoIcon = newElement({
		element: "span",
		className: "material-icons-outlined",
		elementID: `info-icon-${storageKey}`,
		text: "info",
	});

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
	const dropDownDiv = newElement({
		element: "div",
		className: "drop-down-task-content",
		elementID: `drop-down-${storageKey}`,
	});

	const updateButton = newElement({
		element: "span",
		className: "drop-down-task-option",
		elementID: `task${storageKey}-update-button`,
		text: "Edit",
	});

	const deleteButton = newElement({
		element: "span",
		className: "drop-down-task-option",
		elementID: `task${storageKey}-delete-button`,
		text: "Delete",
	});

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
	const newTaskContainer = newElement({
		element: "div",
		elementID: "new-task-form-container",
	});

	const newTaskDiv = newElement({
		element: "div",
		elementID: "new-task-form-div",
	});

	const title = newElement({
		element: "h2",
		className: "pop-up-window-title",
		text: "New Task",
	});

	const error = newElement({
		element: "div",
		elementID: "task-name-error",
	});

	const form = newElement({
		element: "form",
		elementID: "task-form",
	});

	const taskNameInput = newElement({
		element: "input",
		className: "form-input",
		elementID: "task-name-input",
	});

	taskNameInput.type = "text";
	// taskNameInput.placeholder = "Task";

	const taskNameInputLabel = newElement({
		element: "label",
		className: "form-labels",
		text: "Task:",
	});

	taskNameInputLabel.setAttribute("for", "task-name-input");

	const taskNotesInput = newElement({
		element: "textarea",
		className: "form-input",
		elementID: "task-notes-input",
	});

	taskNotesInput.rows = "3";
	// taskNotesInput.placeholder = "Notes";

	const taskNotesInputLabel = newElement({
		element: "label",
		className: "form-labels",
		text: "Notes:",
	});

	taskNotesInputLabel.setAttribute("for", "task-notes-input");

	const projectNameSelect = newElement({
		element: "select",
		className: "form-selection",
		elementID: "project-name-selection",
	});

	for (let i = 0; localStorage.key(i); i++) {
		let storageKey = localStorage.key(i);
		let storageObject = pageState.getStorage(storageKey);
		if (storageObject["type"] == "project") {
			const projectNameSelectOption = newElement({ element: "option" });
			projectNameSelectOption.setAttribute("value", storageObject.projectName);
			projectNameSelectOption.setAttribute("data", storageObject.key);
			projectNameSelectOption.textContent = storageObject.projectName;
			projectNameSelect.appendChild(projectNameSelectOption);
		}
	}

	const projectNameSelectLabel = newElement({
		element: "label",
		className: "form-labels",
		text: "Select a project:",
	});

	projectNameSelectLabel.setAttribute("for", "project-name-selection");

	const dateDiv = newElement({
		element: "div",
		className: "date-time",
		elementID: "date",
	});

	const dateRadioYes = newElement({
		element: "input",
		elementID: "include-date",
	});

	dateRadioYes.type = "Radio";

	const dateRadioYesLabel = newElement({
		element: "label",
		className: "form-labels",
		text: "Yes",
	});

	dateRadioYesLabel.setAttribute("for", "include-date");

	const dateRadioNo = newElement({
		element: "input",
		elementID: "dont-include-date",
	});

	dateRadioNo.type = "Radio";
	dateRadioNo.checked = true;

	const dateRadioNoLabel = newElement({
		element: "label",
		className: "form-labels",
		text: "No",
	});

	dateRadioNoLabel.setAttribute("for", "dont-include-date");

	const dateInput = newElement({
		element: "input",
		className: "form-input",
		elementID: "task-date-input",
	});

	dateInput.type = "date";
	dateInput.disabled = true;

	const dateInputLabel = newElement({
		element: "label",
		className: "form-labels",
		text: "Date:",
	});

	dateInputLabel.setAttribute("for", "task-date-input");

	const timeDiv = newElement({
		element: "div",
		className: "date-time",
		elementID: "time",
	});

	const timeRadioYes = newElement({
		element: "input",
		elementID: "include-time",
	});

	timeRadioYes.type = "Radio";

	const timeRadioYesLabel = newElement({
		element: "label",
		className: "form-labels",
		text: "Yes",
	});

	timeRadioYesLabel.setAttribute("for", "include-time");

	const timeRadioNo = newElement({
		element: "input",
		elementID: "dont-include-time",
	});

	timeRadioNo.type = "Radio";
	timeRadioNo.checked = true;

	const timeRadioNoLabel = newElement({
		element: "label",
		className: "form-labels",
		text: "No",
	});

	timeRadioNoLabel.setAttribute("for", "dont-include-time");

	const timeInput = newElement({
		element: "input",
		className: "form-input",
		elementID: "task-time-input",
	});

	timeInput.type = "time";
	timeInput.disabled = true;

	const timeInputLabel = newElement({
		element: "label",
		className: "form-labels",
		text: "Time:",
	});

	timeInputLabel.setAttribute("for", "task-time-input");

	const buttonSelectorDiv = newElement({
		element: "div",
		elementID: "task-button-selector-div",
	});

	const cancelButton = newElement({
		element: "button",
		className: "button",
		elementID: "task-cancel-button",
		text: "Cancel",
	});

	const submitButton = newElement({
		element: "input",
		className: "button",
		elementID: "task-submit-button",
	});

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
