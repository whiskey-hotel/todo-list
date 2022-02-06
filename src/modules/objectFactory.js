import { pageState } from "./storage";

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
			storageKey = keyGenerator("P");
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
				pageState.populateStorage(storageKey, renamedProjectForTask);
			}
		}

		databaseObj && pageState.populateStorage(key, newProject);

		return;
	};

	const deleteProject = function (key) {
		pageState.deleteStorage(key);
	};

	const updateNumberOfTasks = function (count) {
		totalNumberOfTasks += count;
	};

	const keyGenerator = function (letter) {
		let i = 1;
		let keyTest = 1;
		let key;
		while (keyTest) {
			key = `${letter}${i}`;
			keyTest = pageState.getStorage(key);
			i += 1;
		}
		return key;
	};

	const store = function (key, obj) {
		pageState.populateStorage(key, obj);
	};

	return { getName, create, update, deleteProject, updateNumberOfTasks, store, keyGenerator };
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
	const {store, keyGenerator} = projects(project)
	const type = "task";
	let complete = false;

	const create = function () {
		let storageKey = keyGenerator("T");
		let taskObject = Object.assign(
			{},
			{
				key: storageKey,
				projectKey:"P0",
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

		datbaseObj && pageState.populateStorage(key, newTask);

		return;
	};

	const deleteTask = function (key) {
		pageState.deleteStorage(key);
	};

	return { create, update, deleteTask, store };
};

export { projects, tasks };
