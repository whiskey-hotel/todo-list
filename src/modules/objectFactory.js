import { pageState } from "./storage";
import { newTask } from "./taskHandler";
import { newProject } from "./projectHandler";

const projects = (name) => {
	const type = "project";
	const getName = () => name;
	let totalNumberOfTasks = 0;
	let numberOfTasks = 0;

	const create = function () {
		let projectObject;
		let storageKey;
		if (name == "All") {
			storageKey = "P0";
			projectObject = Object.assign(
				{},
				{
					key: "P0",
					type: type,
					projectName: name,
					numberOfTasks: 0,
				}
			);
		} else {
			storageKey = keyGenerator();
			projectObject = Object.assign(
				{},
				{
					key: storageKey,
					type: type,
					projectName: name,
					numberOfTasks: 0,
				}
			);
		}

		store(storageKey, projectObject);

		return projectObject;
	};

	const update = function (key, projectName) {
		let datbaseObj = pageState.getStorage(key);
		let oldProjectName = datbaseObj["projectName"];

		for (let i = 0; i < localStorage.length; i++) {
			let storageKey = localStorage.key(i);
			let storageObject = pageState.getStorage(storageKey);
			if (storageObject["type"] == "task" && storageObject["projectName"] == oldProjectName) {
				pageState.populateTaskStorage(
					storageKey,
					projectName,
					storageObject["taskName"],
					storageObject["notes"],
					storageObject["day"],
					storageObject["time"],
					storageObject["type"],
					storageObject["complete"]
				);
			}
		}

		datbaseObj && pageState.populateProjectStorage(key, projectName, datbaseObj["numberOfTasks"], datbaseObj["type"]);

		return;
	};

	const deleteProject = function (key) {
		pageState.deleteStorage(key);
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

	const store = function (key, obj) {
		pageState.populateProjectStorage(key, obj);
	};

	return { getName, create, update, deleteProject, updateNumberOfTasks };
};

const tasks = (task, project = "All", notes = "", day = "", time = "") => {
	const type = "task";
	let complete = false;

	const create = function () {
		let storageKey = keyGenerator();
		store(storageKey, type, complete);
		return newTask(storageKey, project, task, notes, day, time, complete);
	};

	const update = function (key, projectName, taskTitle, notes, day, time) {
		let datbaseObj = pageState.getStorage(key);

		datbaseObj && pageState.populateTaskStorage(key, projectName, taskTitle, notes, day, time, datbaseObj["type"], datbaseObj["complete"]);

		return;
	};

	const deleteTask = function (key) {
		pageState.deleteStorage(key);
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

	const store = function (key, type, complete) {
		pageState.populateTaskStorage(key, project, task, notes, day, time, type, complete);
	};

	return { create, update, deleteTask, store };
};

export { projects, tasks };