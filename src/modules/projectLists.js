import { newElement, sendToBody, removeAllChildNodes } from "./DOMController";
import { pageState } from "./storage";
import { home } from "./elementBuilder";

const projects = (name) => {
	const getName = () => name;
	let totalNumberOfTasks = 0;
	let numberOfTasks = 0;

	const create = function () {
		let storageKey = keyGenerator();
		const modifiedNameForID = name.replace(/\s/g, "");
		const newProject = newElement("div", "project-list", `${modifiedNameForID}-list`);
		newProject.setAttribute("data-value", storageKey);
		const newListTitle = newElement("h3", "project-title", ...Array(1), `${name}`);
		const numberOfTasksElement = newElement("span", "number-of-tasks", ...Array(1), `${numberOfTasks}`);

		newProject.appendChild(newListTitle);
		newProject.appendChild(numberOfTasksElement);

		store(storageKey, name, numberOfTasks);

		return newProject;
	};

	const updateNumberOfTasks = function (count) {
		totalNumberOfTasks += count;
	};

	const keyGenerator = function () {
		let i = 1;
		let keyTest = 1;
		let key;
		while (keyTest) {
			key = `P${i}`;
			keyTest = pageState.getStorage(key);
			i += 1;
		}
		return key;
	};

	const store = function (key, projectName, numberOfTasks) {
		pageState.populateProjectStorage(key, projectName, numberOfTasks);
	};

	const update = function () {};
	const del = function () {};

	return { getName, create, updateNumberOfTasks };
};

const tasks = (task, project = "All", notes = "", day = "", time = "") => {
	let complete = false;
	const create = function () {
		let storageKey = keyGenerator();
		const newTask = newElement("div", "task-list");
		newTask.setAttribute("data-value", storageKey);
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

		// projects.updateNumberOfTasks(1);
		store(storageKey);

		return newTask;
	};

	const keyGenerator = function () {
		let i = 1;
		let keyTest = 1;
		let key;
		while (keyTest) {
			key = `T${i}`;
			keyTest = pageState.getStorage(key);
			i += 1;
		}
		return key;
	};

	const store = function (key) {
		pageState.populateTaskStorage(key, project, task, notes, day, time);
	};

	return { create, store };
};

export { projects, tasks };
