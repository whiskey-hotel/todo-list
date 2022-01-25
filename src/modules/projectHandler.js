import { newElement } from "./DOMController";
import { displayNewProjectWindow } from "./formWindows";

function newProject(name, storageKey, numberOfTasks) {
	const modifiedNameForID = name.replace(/\s/g, "");
	const newProject = newElement("div", "project-list", `${modifiedNameForID}-list`);
	newProject.setAttribute("data-value", storageKey);
	const newListTitle = newElement("h3", "project-title", ...Array(1), `${name}`);
	const numberOfTasksElement = newElement("span", "number-of-tasks", ...Array(1), `${numberOfTasks}`);

	newProject.appendChild(newListTitle);
	newProject.appendChild(numberOfTasksElement);

	return newProject;
}

export { newProject };
