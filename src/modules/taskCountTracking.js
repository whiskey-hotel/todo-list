import { pageState } from "./storage";

// const allProjectCount = document.body.querySelector(`.project-list[data-value=P0]`);

function staticTaskCount() {
	const projectsDiv = document.getElementById("projects-div");
	for (let i = 0; i < localStorage.length; i++) {
		let storageKey = localStorage.key(i);
		let storageObject = pageState.getStorage(storageKey);
		if (storageObject["type"] == "task") {
			for (let p = 0; p < projectsDiv.childNodes.length; p++) {
				if (projectsDiv.childNodes[p].childNodes[0].textContent != "All") {
					if (projectsDiv.childNodes[p].childNodes[0].textContent == storageObject["projectName"]) {
						projectsDiv.childNodes[p].childNodes[1].textContent = 1 + + projectsDiv.childNodes[p].childNodes[1].textContent;
						//unary plus (+ +) sign does not work with addition assignment (+=).
					}
				}
			}
		}
	}
}

export { staticTaskCount };
