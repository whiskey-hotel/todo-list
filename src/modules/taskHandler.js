import { newElement, sendToBody } from "./DOMController";
import { displayNewTaskWindow } from "./formWindows";
import { tasks } from "./projectLists";


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

export { newTask, dropDownOption };
