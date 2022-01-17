import { newElement } from "./DOMController";

function home() {
	const main = newElement("div", "container", "content", "hey there!");
    
	return main;
}

export { home };
