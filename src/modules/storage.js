const pageState = (() => {
	const populateProjectStorage = (objectKey = "projects", name, count, type) => {
		localStorage.setItem(
			objectKey,
			JSON.stringify({
                type: type,
				projectName: name,
				numberOfTasks: count,
			})
		);
	};

    const populateTaskStorage = (objectKey = "tasks", name, taskTitle, notes, day, time, type, complete) => {
		localStorage.setItem(
			objectKey,
			JSON.stringify({
                type: type,
				projectName: name,
                taskName: taskTitle,
                notes: notes,
                day: day,
                time: time,
                complete: complete,
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
