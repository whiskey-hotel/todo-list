const pageState = (() => {
	const populateProjectStorage = (objectKey = "projects", name, count) => {
		localStorage.setItem(
			objectKey,
			JSON.stringify({
				projectName: name,
				numberOfTasks: count,
			})
		);
	};

    const populateTaskStorage = (objectKey = "tasks", name, taskTitle, notes, day, time) => {
		localStorage.setItem(
			objectKey,
			JSON.stringify({
				projectName: name,
                taskName: taskTitle,
                notes: notes,
                day: day,
                time: time
			})
		);
	};

	const getStorage = (objectKey) => {
		return JSON.parse(localStorage.getItem(objectKey));
	};

	const deleteStorage = (objectKey) => {
		return localStorage.removeItem(objectKey);
	};

	return { populateProjectStorage, populateTaskStorage, getStorage, deleteStorage };
})();

export { pageState };
