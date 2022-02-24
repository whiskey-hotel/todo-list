function updateDOMForNewTask(key) {
	let allTaskCounter = document.getElementById(`P0-task-count`);
	let projectTaskCounter = document.getElementById(`${key}-task-count`);
	++projectTaskCounter.textContent;
	if (key != "P0") {
		++allTaskCounter.textContent;
	}
}

function updateDOMForExistingTask(key, oldKey) {
	let projectTaskCounter = document.getElementById(`${key}-task-count`);
	let oldProjectTaskCounter = document.getElementById(`${oldKey}-task-count`);
	if (key != "P0") {
		++projectTaskCounter.textContent;
	}
	if (oldKey != "P0") {
		--oldProjectTaskCounter.textContent;
	}
}

function updateDOMForDeletingTask(key) {
	let allTaskCounter = document.getElementById(`P0-task-count`);
	let projectTaskCounter = document.getElementById(`${key}-task-count`);
	--projectTaskCounter.textContent;
	if (key != "P0") {
		--allTaskCounter.textContent;
	}
}

function updateDOMForTotalCompletedTasks(dec = null) {
	const allTaskCounter = document.getElementById("completed-task-count");
	if (dec) {
		--allTaskCounter.textContent;
	} else {
		++allTaskCounter.textContent;
	}
}

function updateDOMForCompletedTask(key, inc = null) {
	let allTaskCounter = document.getElementById(`P0-task-count`);
	let projectTaskCounter = document.getElementById(`${key}-task-count`);
	if (inc) {
		if (key != "P0") {
			++projectTaskCounter.textContent;
		}
		++allTaskCounter.textContent;
		
	} else {
		if (key != "P0") {
			--projectTaskCounter.textContent;
		}
		--allTaskCounter.textContent;
	}
}

export { updateDOMForExistingTask, updateDOMForNewTask, updateDOMForDeletingTask, updateDOMForTotalCompletedTasks, updateDOMForCompletedTask };
