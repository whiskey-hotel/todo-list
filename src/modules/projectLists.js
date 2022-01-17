import { newElement } from "./DOMController";

function home() {
    const header = newElement("div", "header");
	const title = newElement("h1", "title", ...Array(1), "My Reminders");
    const edit = newElement("span", "edit", "project-edit", "Edit")
    const projects = newElement("div", "projects-container");

    header.appendChild(title);
    header.appendChild(edit);


    
	return {header, projects};
}

export { home };
