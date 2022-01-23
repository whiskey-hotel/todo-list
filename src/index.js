import "./main.css";
import { home, recall } from "./modules/elementBuilder";
import * as pageRender from "./modules/DOMController";

const main = pageRender.newElement("div", "container", "content");
// document.addEventListener("click", function (e) {
//     console.log(e.target)
//     // console.log("hey")
// });

pageRender.moduleRender(home(), main);
pageRender.sendToBody(main);
recall()


