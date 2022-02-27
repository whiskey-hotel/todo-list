import { newElement, sendToBody, closeWindow } from "./DOMController";
import { projects, tasks } from "./objectFactory";
import { pageState } from "./storage";
import { updateDOMForExistingTask, updateDOMForNewTask, updateDOMForDeletingTask, updateDOMForTotalCompletedTasks } from "./taskCountTracking";
import { dateFormatter, timeFormatter } from "./dateTime";
import { newTask } from "./elementBuilder";

function showHideCompletedTasks() {
	let showCompleted = projects().getCompletedStatus();
	const taskDiv = document.getElementById("main-task-div");
	showCompleted = !showCompleted;
	if (showCompleted) {
		for (let i = 0; i < localStorage.length; i++) {
			let storageKey = localStorage.key(i);
			let storageObject = pageState.getStorage(storageKey);
			if (storageObject["type"] == "task" && storageObject["complete"]) {
				if (projects().getCurrentProject() == "P0") {
					let restoredTask = newTask(storageObject);
					taskDiv.appendChild(restoredTask);
				} else if (storageObject["projectKey"] == projects().getCurrentProject()) {
					let restoredTask = newTask(storageObject);
					taskDiv.appendChild(restoredTask);
				}
			}
		}
	} else {
		let completedTask = document.getElementsByClassName("task-list");
		Array.from(completedTask).forEach((c) => {
			let storageKey = c.dataset.value;
			let storageObject = pageState.getStorage(storageKey);
			if (storageObject["complete"]) {
				taskDiv.removeChild(c);
			}
		});
	}
	projects().updateShowCompleted(showCompleted);
	return;
}

function completedTask(completed, obj) {
	let storageKey = obj.key;
	completed = !completed;
	obj.complete = completed;
	tasks().store(storageKey, obj);

	return completed;
}

function taskValidation(taskNameValue) {
	let errorArray = [];
	if (taskNameValue === "" || taskNameValue == null) {
		errorArray.push("Task description is required");
	}
	return errorArray;
}

function createTask(e, storageKey, newTaskContainer, taskNameInput, projectNameSelect, taskNotesInput, dateInput, dateRadioNo, timeInput, timeRadioNo) {
	const errorField = document.getElementById("task-name-error");

	const taskDiv = document.getElementById("main-task-div");
	let taskNameValue = taskNameInput.value;
	let taskProjectNameValue = projectNameSelect.value;

	let option = projectNameSelect.options[projectNameSelect.selectedIndex];
	let taskProjectKey = option.attributes.data.value;

	let taskNotesValue = taskNotesInput.value;
	let taskDateValue = "";
	let taskTimeValue = "";

	if (dateInput && dateRadioNo.checked == false) {
		taskDateValue = dateInput.value;
	}
	if (timeInput && timeRadioNo.checked == false) {
		taskTimeValue = timeInput.value;
	}

	let messages = taskValidation(taskNameValue);
	if (messages.length > 0) {
		e.preventDefault();
		errorField.textContent = messages.join(", ");
	} else {
		let instantiateTaskObject = tasks(taskNameValue, taskProjectNameValue, taskProjectKey, taskNotesValue, taskDateValue, taskTimeValue);
		if (storageKey) {
			const updateTaskDiv = document.querySelector(`.task-list[data-value=${storageKey}]`).childNodes[1];
			updateTaskDiv.childNodes[0].textContent = taskNameValue;
			updateTaskDiv.childNodes[1].childNodes[0].textContent = taskNotesValue;
			if (taskDateValue) {
				updateTaskDiv.childNodes[2].childNodes[0].textContent = dateFormatter(taskDateValue);
			}
			if (taskTimeValue) {
				updateTaskDiv.childNodes[2].childNodes[1].textContent = timeFormatter(taskTimeValue);
			}
			let oldKey = pageState.getStorage(storageKey).projectKey;
			let completedStatus = pageState.getStorage(storageKey).complete;
			let newKey = taskProjectKey;
			projects().updateProjectTaskCountForExistingTask(oldKey, newKey, completedStatus);
			updateDOMForExistingTask(newKey, oldKey);
			instantiateTaskObject.update(storageKey, taskProjectNameValue, taskProjectKey, taskNameValue, taskNotesValue, taskDateValue, taskTimeValue);
		} else {
			let newTaskObject = instantiateTaskObject.create();
			let newElement = newTask(newTaskObject);
			projects().updateNumberOfTasks(newTaskObject.projectKey, null, "newTask");
			updateDOMForNewTask(newTaskObject.projectKey);
			taskDiv.appendChild(newElement);
		}
		closeWindow(newTaskContainer);
	}
}

function removeTask(storageKey) {
	const mainTaskDiv = document.getElementById("main-task-div");
	const deletedTask = document.body.querySelector(`.task-list[data-value=${storageKey}`);
	let projectKey = pageState.getStorage(storageKey).projectKey;
	projects().updateNumberOfTasks(projectKey, "decrement");
	tasks().deleteTask(storageKey);
	updateDOMForDeletingTask(projectKey);
	mainTaskDiv.removeChild(deletedTask);
}

export { newTask, showHideCompletedTasks, completedTask, createTask, removeTask };
