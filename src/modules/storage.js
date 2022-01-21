const pageState = (() => {
	const populateStorage = (objectName, objectType, objectKey) => {
		localStorage.setItem(
			objectKey,
			JSON.stringify({
				name: objectName,
				type: objectType,
			})
		);
	};

	const getStorage = (objectKey) => {
		return JSON.parse(localStorage.getItem(objectKey));
	};

	const deleteStorage = (objectKey) => {
		return localStorage.removeItem(objectKey);
	};

	return { populateStorage, getStorage, deleteStorage };
})();

export { pageState };
