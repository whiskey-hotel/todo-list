function newElement(element = "", className = "", elementID = "", text = "") {
	const newElement = document.createElement(element);
	className ? (newElement.classList = className) : null;
	elementID ? (newElement.id = elementID) : null;
	text ? (newElement.textContent = text) : null;

	return newElement;
}

function sendToBody(HTML) {
	return document.body.appendChild(HTML);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function moduleRender(obj,parentNode) {
    removeAllChildNodes(parentNode);
    for (let x in obj) {
        parentNode.appendChild(obj[x]);
    }
}

export { newElement, sendToBody, removeAllChildNodes, moduleRender };
