function newElement(element = "", className = "", elementID = "", text = "") {
	const newElement = document.createElement(element);
	if (className) {
		newElement.classList = className;
	}
	if (elementID) {
		newElement.id = elementID;
	}

	if (text) {
		newElement.textContent = text;
	}

	return newElement;
}


function sendToBody(HTML){
   return document.body.appendChild(HTML)
}

export { newElement, sendToBody };