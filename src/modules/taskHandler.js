import { newElement, sendToBody, closeWindow } from "./DOMController";
import { projects, tasks } from "./objectFactory";
import { pageState } from "./storage";
import { updateDOMForExistingTask, updateDOMForNewTask, updateDOMForDeletingTask } from "./taskCountTracking";

function newTask(obj) {
	let storageKey = obj.key;
	let project = obj.projectName;
	let task = obj.taskName;
	let notes = obj.notes;
	let day = obj.day;
	let time = obj.time;
	let complete = obj.complete;

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
		obj.complete = complete;
		tasks().store(storageKey, obj);

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
		let projectKey = pageState.getStorage(storageKey).projectKey;
		updateDOMForDeletingTask(projectKey);
		tasks().deleteTask(storageKey);
		mainTaskDiv.removeChild(deletedTask);
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

	if (storageKey) {
		taskNameInput.value = pageState.getStorage(`${storageKey}`)["taskName"];
		taskNotesInput.value = pageState.getStorage(`${storageKey}`)["notes"];
		projectNameSelect.value = pageState.getStorage(`${storageKey}`)["projectName"];

		if (pageState.getStorage(`${storageKey}`)["day"]) {
			dateRadioYes.checked = true;
			dateRadioNo.checked = false;
			dateInput.disabled = false;
			dateInput.value = pageState.getStorage(`${storageKey}`)["day"];
		}
		if (pageState.getStorage(`${storageKey}`)["time"]) {
			timeRadioYes.checked = true;
			timeRadioNo.checked = false;
			timeInput.disabled = false;
			timeInput.value = pageState.getStorage(`${storageKey}`)["time"];
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

	form.addEventListener("submit", (e) => {
		const errorField = document.getElementById("task-name-error");
		let messages = [];
		const taskDiv = document.getElementById("main-task-div");
		let taskNameValue = taskNameInput.value;
		let taskProjectNameValue = projectNameSelect.value;

		let option = projectNameSelect.options[projectNameSelect.selectedIndex];
		let taskProjectKey = option.attributes.data.value;

		let taskNotesValue = taskNotesInput.value;
		let taskDateValue = "";
		let taskTimeValue = "";
		if (dateInput) {
			taskDateValue = dateInput.value;
		}
		if (timeInput) {
			taskTimeValue = timeInput.value;
		}

		//Form Validation
		if (taskNameValue === "" || taskNameValue == null) {
			messages.push("Name is required");
		}
		if (messages.length > 0) {
			e.preventDefault();
			errorField.textContent = messages.join(", ");
		} else {
			let instantiateTaskObject = tasks(taskNameValue, taskProjectNameValue, taskProjectKey, taskNotesValue, taskDateValue, taskTimeValue);
			if (storageKey) {
				const updateTaskDiv = document.querySelector(`.task-list[data-value=${storageKey}]`).childNodes[1];
				updateTaskDiv.childNodes[0].textContent = taskNameValue;
				updateTaskDiv.childNodes[1].childNodes[0].textContent = taskNotesValue;
				updateTaskDiv.childNodes[2].childNodes[0].textContent = taskDateValue;
				updateTaskDiv.childNodes[2].childNodes[1].textContent = taskTimeValue;
				let oldKey = pageState.getStorage(storageKey).projectKey;
				let newKey = taskProjectKey;
				updateDOMForExistingTask(newKey, oldKey);
				projects().updateNumberOfTasks(newKey);
				projects().updateNumberOfTasks(oldKey, "decrement");
				instantiateTaskObject.update(storageKey, taskProjectNameValue, taskProjectKey, taskNameValue, taskNotesValue, taskDateValue, taskTimeValue);
			} else {
				let newTaskObject = instantiateTaskObject.create();
				let newElement = newTask(newTaskObject);
				projects().updateNumberOfTasks(newTaskObject.projectKey);
				updateDOMForNewTask(newTaskObject.projectKey);
				taskDiv.appendChild(newElement);
			}

			closeWindow(newTaskContainer);
		}
	});

	return newTaskContainer;
}

export { newTask, dropDownOption, displayNewTaskWindow };
