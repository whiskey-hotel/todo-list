import { newTask } from "./elementBuilder";
import { pageState } from "./storage";

const projects = (name) => {
	const type = "project";

	const changeCurrentProject = function (newCurrentProject) {
		pageState.populateStorage("currentProject", newCurrentProject);
	};

	const updateShowCompleted = function (value) {
		pageState.populateStorage("showCompleted", value);
	};

	const getCurrentProject = () => {
		return pageState.getStorage("currentProject");
	};

	const getCompletedStatus = () => {
		return pageState.getStorage("showCompleted");
	};

	const getName = () => name;

	const create = function () {
		let projectObject;
		let storageKey;
		if (name == "All") {
			storageKey = "P0";
			projectObject = Object.assign(
				{},
				{
					key: storageKey,
					type: type,
					projectName: name,
					numberOfTasks: 0,
					completeTasks: 0,
					incompleteTasks: 0,
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
					completeTasks: 0,
					incompleteTasks: 0,
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

	const updateNumberOfTasks = function (key, dec = null, newTask = null) {
		let storageObject = pageState.getStorage(key);
		let allProjectObject = pageState.getStorage("P0");
		//creating a new task
		if (newTask) {
			if (key != "P0") {
				++allProjectObject.incompleteTasks;
				++allProjectObject.numberOfTasks;
				store("P0", allProjectObject);
			}
			++storageObject.incompleteTasks;
			++storageObject.numberOfTasks;
		} else if (dec) {
			//marking a task as complete
			if (key != "P0") {
				--allProjectObject.incompleteTasks;
				++allProjectObject.completeTasks;
				store("P0", allProjectObject);
			}
			--storageObject.incompleteTasks;
			++storageObject.completeTasks;
		} else {
			//marking a task as incomplete
			if (key != "P0") {
				++allProjectObject.incompleteTasks;
				--allProjectObject.completeTasks;
				store("P0", allProjectObject);
			}
			++storageObject.incompleteTasks;
			--storageObject.completeTasks;
		}
		store(key, storageObject);
	};

	const updateProjectTaskCountForExistingTask = function (oldKey, newKey, complete) {
		//call if a task is changing its asocciated project
		let oldTaskObject = pageState.getStorage(oldKey);
		let newTaskObject = pageState.getStorage(newKey);
		newTaskObject = newKey == "P0" ? undefined : newTaskObject;
		oldTaskObject = oldKey == "P0" ? undefined : oldTaskObject;

		if (!complete) {
			oldTaskObject && --oldTaskObject.incompleteTasks;
			oldTaskObject && --oldTaskObject.numberOfTasks;
			newTaskObject && ++newTaskObject.incompleteTasks;
			newTaskObject && ++newTaskObject.numberOfTasks;
		} else {
			oldTaskObject && --oldTaskObject.completeTasks;
			oldTaskObject && --oldTaskObject.numberOfTasks;
			newTaskObject && ++newTaskObject.completeTasks;
			newTaskObject && ++newTaskObject.numberOfTasks;
		}
		newTaskObject && store(newKey, newTaskObject);
		oldTaskObject && store(oldKey, oldTaskObject);
	};

	const updateProjectTaskCountForRemovedTask = function (key) {
		let taskObject = pageState.getStorage(key);
		let projectObject = pageState.getStorage(taskObject.projectKey);
		let allProjectObject = pageState.getStorage("P0");
		if (taskObject.complete) {
			if (projectObject.key != "P0") {
				--allProjectObject.completeTasks;
				--allProjectObject.numberOfTasks;
				store("P0", allProjectObject);
			}
			--projectObject.completeTasks;
			--projectObject.numberOfTasks;
			store(projectObject.key, projectObject);
		} else {
			if (projectObject.key != "P0") {
				--allProjectObject.incompleteTasks;
				--allProjectObject.numberOfTasks;
				store("P0", allProjectObject);
			}
			--projectObject.incompleteTasks;
			--projectObject.numberOfTasks;
			store(projectObject.key, projectObject);
		}
		
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

	return {
		getName,
		create,
		update,
		deleteProject,
		updateNumberOfTasks,
		store,
		keyGenerator,
		updateShowCompleted,
		changeCurrentProject,
		getCurrentProject,
		getCompletedStatus,
		updateProjectTaskCountForExistingTask,
		updateProjectTaskCountForRemovedTask,
	};
};

/**/

const tasks = (task, project, projectKey = "P0", notes, day, time) => {
	const { store, keyGenerator } = projects(project);
	const type = "task";
	let complete = false;

	const create = function () {
		let storageKey = keyGenerator("T");
		let taskObject = Object.assign(
			{},
			{
				key: storageKey,
				projectKey: projectKey,
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

	const update = function (key, projectName, projectKey, taskName, notes, day, time) {
		let datbaseObj = pageState.getStorage(key);
		let newTask = Object.assign({}, datbaseObj);
		newTask.projectName = projectName;
		newTask.projectKey = projectKey;
		newTask.taskName = taskName;
		newTask.notes = notes;
		newTask.day = day;
		newTask.time = time;

		datbaseObj && store(key, newTask);

		return;
	};

	const deleteTask = function (key) {
		pageState.deleteStorage(key);
	};

	return { create, update, deleteTask, store };
};

export { projects, tasks };
