import "./main.css";
import { home, newProject, newTask } from "./modules/elementBuilder";
import { updateDOMForTotalCompletedTasks } from "./modules/taskCountTracking";
import * as pageRender from "./modules/DOMController";
import { pageState } from "./modules/storage";
import { projects } from "./modules/objectFactory";

const main = pageRender.newElement("div", "container", "content");
const instantiateMainProject = projects("All");
let mainListObj = instantiateMainProject.create();

pageRender.moduleRender(home(mainListObj), main);
pageRender.sendToBody(main);

function recall(selectedProject = null, completed = null) {
	projects().updateShowCompleted(false);
	projects().changeCurrentProject("P0");
	const projectsDiv = document.getElementById("projects-div");
	const taskDiv = document.getElementById("main-task-div");
	let totalNumberOfTasks = 0;
	const allProjectCount = document.body.querySelector(`.project-list[data-value=P0]`);

	for (let i = 0; i < localStorage.length; i++) {
		let storageKey = localStorage.key(i);
		let storageObject = pageState.getStorage(storageKey);
		if (storageObject["type"] == "project" && storageKey != "P0") {
			let restoredProject = newProject(storageObject);
			projectsDiv.appendChild(restoredProject);
		} else if (storageObject["type"] == "task") {
			if (storageObject["complete"]) {
				updateDOMForTotalCompletedTasks();
			}
			if (storageObject["complete"] == false) {
				totalNumberOfTasks += 1;
				let restoredTask = newTask(storageObject);
				taskDiv.appendChild(restoredTask);
			}
		}
	}

	allProjectCount.childNodes[1].textContent = totalNumberOfTasks;
}

recall();
