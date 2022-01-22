import { newElement, sendToBody, removeAllChildNodes } from "./DOMController";
import { pageState } from "./storage";
import { home, newProject, newTask } from "./elementBuilder";

const projects = (name) => {
	const getName = () => name;
	let totalNumberOfTasks = 0;
	let numberOfTasks = 0;

	const create = function () {
		let storageKey = keyGenerator();
		store(storageKey, name, numberOfTasks);
		return newProject(name, storageKey, numberOfTasks);
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
		store(storageKey);
		return newTask(storageKey, task, notes, day, time, complete);
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
