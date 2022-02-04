import { pageState } from "./storage";

// const allProjectCount = document.body.querySelector(`.project-list[data-value=P0]`);

function staticTaskCount() {
	const projectsDiv = document.getElementById("projects-div");

	//First, reset all task counts to zero, then calculate from storage
	for (let p = 1; p < projectsDiv.childNodes.length; p++) {
		projectsDiv.childNodes[p].childNodes[1].textContent = 0;
	}
	
	for (let i = 0; i < localStorage.length; i++) {
		let storageKey = localStorage.key(i);
		let storageObject = pageState.getStorage(storageKey);
		if (storageObject["type"] == "task") {
			for (let p = 0; p < projectsDiv.childNodes.length; p++) {
				if (projectsDiv.childNodes[p].childNodes[0].textContent != "All") {
					if (projectsDiv.childNodes[p].childNodes[0].textContent == storageObject["projectName"]) {
						++projectsDiv.childNodes[p].childNodes[1].textContent;
					}
				}
			}
		}
	}
}

function dynamicTaskCount(projectName, storageKey = null, oldProject = null) {
	const projectsDiv = document.getElementById("projects-div");

	for (let p = 0; p < projectsDiv.childNodes.length; p++) {
		//To prevent decrementing the total number of tasks for editing existing task group
		if (projectName == "All" && !oldProject) {
			++projectsDiv.childNodes[0].childNodes[1].textContent;
			return;
		}

		if (projectName == "All" && oldProject) {
			if (projectsDiv.childNodes[p].childNodes[0].textContent == oldProject) {
				--projectsDiv.childNodes[p].childNodes[1].textContent;
				return;
			}
		}

		if (projectsDiv.childNodes[p].childNodes[0].textContent == projectName) {
			++projectsDiv.childNodes[p].childNodes[1].textContent;
			if (!storageKey) {
				++projectsDiv.childNodes[0].childNodes[1].textContent; //for "All" projects
			}
		}

		if (oldProject && oldProject != "All" && projectsDiv.childNodes[p].childNodes[0].textContent == oldProject) {
			--projectsDiv.childNodes[p].childNodes[1].textContent;
		}
	}
}

function deletingTaskCount(projectName) {
	const projectsDiv = document.getElementById("projects-div");

	if (projectName == "All") {
		--projectsDiv.childNodes[0].childNodes[1].textContent;
		return;
	}

	for (let p = 0; p < projectsDiv.childNodes.length; p++) {
		if (projectsDiv.childNodes[p].childNodes[0].textContent == projectName) {
			--projectsDiv.childNodes[p].childNodes[1].textContent;
			--projectsDiv.childNodes[0].childNodes[1].textContent;
		}
	}
}

export { staticTaskCount, dynamicTaskCount, deletingTaskCount };
