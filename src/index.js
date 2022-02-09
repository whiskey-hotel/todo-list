import "./main.css";
import { home, recall } from "./modules/elementBuilder";
import * as pageRender from "./modules/DOMController";
import { projects } from "./modules/objectFactory";

const main = pageRender.newElement("div", "container", "content");
const instantiateMainProject = projects("All");
let mainListObj = instantiateMainProject.create();
// document.addEventListener("click", function (e) {
//     console.log(e.target)
//     // console.log("hey")
// });

pageRender.moduleRender(home(mainListObj), main);
pageRender.sendToBody(main);
recall()


