import { newElement, sendToBody, removeAllChildNodes } from "./DOMController";
import { pageState } from "./storage";
import { home } from "./elementBuilder";

const projects = (name) => {
	const getName = () => name;

	const create = function () {
		const modifiedNameForID = name.replace(/\s/g, "");
		const newProject = newElement("div", "project-list", `${modifiedNameForID}-list`);
		const newListTitle = newElement("h3", "project-title", ...Array(1), `${name}`);
		const numberOfTasks = newElement("span", "number-of-tasks", ...Array(1), "0");

		newProject.appendChild(newListTitle);
		newProject.appendChild(numberOfTasks);

		return newProject;
	};
	const updateNumberOfTasks = function () {};

	const update = function () {};
	const del = function () {};

	return { getName, create, updateNumberOfTasks };
};

const tasks = (task, project="All", notes = "", day = "", time = "") => {
	let complete = false;
	const create = function () {
		const newTask = newElement("div", "task-list", "id-tracker");
		const newTaskCheckMark = newElement("input", "task-checkmark");
		newTaskCheckMark.type = "radio";
		const newTaskDetails = newElement("div", "task-info-container");
		const newTaskTitle = newElement("h3", "task-title", ...Array(1), task);
		const newTaskNotesDiv = newElement("div", "task-notes-div");
		const newTaskNotes = newElement("p", "task-notes", ...Array(1), notes);
		const newDateTimeDiv = newElement("div", "task-date-time-div");
		const newTaskDay = newElement("p", "task-date", ...Array(1), day);
		const newTasktime = newElement("p", "task-time", ...Array(1), time);

		newTaskCheckMark.addEventListener("click", function () {
			complete = !complete;

			if (complete) {
				newTaskCheckMark.checked;
			} else {
				newTaskCheckMark.checked = false;
			}
		});

		newTask.appendChild(newTaskCheckMark);
		newTask.appendChild(newTaskDetails);
		newTaskDetails.appendChild(newTaskTitle);
		newTaskDetails.appendChild(newTaskNotesDiv);
		newTaskNotesDiv.appendChild(newTaskNotes);
		newTaskDetails.appendChild(newDateTimeDiv);
		newDateTimeDiv.appendChild(newTaskDay);
		newDateTimeDiv.appendChild(newTasktime);

		return newTask;
	};

	return { create };
};


export { projects, tasks };
