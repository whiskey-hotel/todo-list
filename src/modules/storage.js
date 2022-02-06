const pageState = (() => {
	const populateProjectStorage = (objectKey, objectValues) => {
		localStorage.setItem(objectKey, JSON.stringify(objectValues));
	};

	const populateTaskStorage = (objectKey, objectValues) => {
		localStorage.setItem(objectKey,JSON.stringify(objectValues));
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
