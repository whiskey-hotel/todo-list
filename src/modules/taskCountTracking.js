import { pageState } from "./storage";

function updateDOMForNewTask(key) {
	let allTaskCounter = document.getElementById(`P0-task-count`);
	let projectTaskCounter = document.getElementById(`${key}-task-count`);
	projectTaskCounter.textContent = `${pageState.getStorage(key)["incompleteTasks"]}`;
	if (key != "P0") {
		allTaskCounter.textContent = `${pageState.getStorage("P0")["incompleteTasks"]}`;
	}
}

function updateDOMForExistingTask(key, oldKey) {
	let projectTaskCounter = document.getElementById(`${key}-task-count`);
	let oldProjectTaskCounter = document.getElementById(`${oldKey}-task-count`);
	if (key != "P0") {
		projectTaskCounter.textContent = `${pageState.getStorage(key)["incompleteTasks"]}`;
	}
	if (oldKey != "P0") {
		oldProjectTaskCounter.textContent = `${pageState.getStorage(oldKey)["incompleteTasks"]}`;
	}
}

function updateDOMForDeletingTask(key) {
	let allTaskCounter = document.getElementById(`P0-task-count`);
	let projectTaskCounter = document.getElementById(`${key}-task-count`);
	projectTaskCounter.textContent = `${pageState.getStorage(key)["incompleteTasks"]}`;
	if (key != "P0") {
		allTaskCounter.textContent = `${pageState.getStorage("P0")["incompleteTasks"]}`;
	}
}

function updateDOMForTotalCompletedTasks(dec = null) {
	let key = pageState.getStorage("currentProject");

	const allTaskCounter = document.getElementById("completed-task-count");
	if (dec) {
		allTaskCounter.textContent = `${pageState.getStorage(key)["completeTasks"]}`;
	} else {
		allTaskCounter.textContent = `${pageState.getStorage(key)["completeTasks"]}`;
	}
}

function updateDOMForCompletedTask(key, inc = null) {
	let allTaskCounter = document.getElementById(`P0-task-count`);
	let projectTaskCounter = document.getElementById(`${key}-task-count`);
	if (inc) {
		if (key != "P0") {
			projectTaskCounter.textContent = `${pageState.getStorage(key)["incompleteTasks"]}`;
		}
		allTaskCounter.textContent = `${pageState.getStorage("P0")["incompleteTasks"]}`;
	} else {
		if (key != "P0") {
			projectTaskCounter.textContent = `${pageState.getStorage(key)["incompleteTasks"]}`;
		}
		allTaskCounter.textContent = `${pageState.getStorage("P0")["incompleteTasks"]}`;
	}
}

export { updateDOMForExistingTask, updateDOMForNewTask, updateDOMForDeletingTask, updateDOMForTotalCompletedTasks, updateDOMForCompletedTask };
