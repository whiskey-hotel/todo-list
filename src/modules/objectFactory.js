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
		let databaseObj = pageState.getStorage(key);
		let oldProjectName = databaseObj.projectName;
		let newProject = Object.assign({}, databaseObj);
		newProject.projectName = projectName;

		for (let i = 0; i < localStorage.length; i++) {
			let storageKey = localStorage.key(i);
			let storageObject = pageState.getStorage(storageKey);
			if (storageObject.type == "task" && storageObject.projectName == oldProjectName) {
				let renamedProjectForTask = Object.assign({}, storageObject);
				renamedProjectForTask.projectName = projectName;
				pageState.populateTaskStorage(storageKey, renamedProjectForTask);
			}
		}

		databaseObj && pageState.populateProjectStorage(key, newProject);

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

/*
*
*
*
*
*
*
*
*
*
*
*
*/

const tasks = (task, project, notes, day, time) => {
	const type = "task";
	let complete = false;

	const create = function () {
		let storageKey = keyGenerator();
		let taskObject = Object.assign(
			{},
			{
				key: storageKey,
				type: type,
				projectName: project,
				taskName: task,
				notes: notes,
				day: day,
				time: time,
				complete: complete,
			}
		);

		store(storageKey, taskObject);
		// return newTask(storageKey, project, task, notes, day, time, complete);
		return taskObject;
	};

	const update = function (key, projectName, taskName, notes, day, time) {
		let datbaseObj = pageState.getStorage(key);
		let newTask = Object.assign({}, datbaseObj);
		newTask.projectName = projectName;
		newTask.taskName = taskName;
		newTask.notes = notes;
		newTask.day = day;
		newTask.time = time;

		datbaseObj && pageState.populateTaskStorage(key, newTask);

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

	const store = function (key, obj) {
		pageState.populateTaskStorage(key, obj);
	};

	return { create, update, deleteTask, store };
};

export { projects, tasks };
