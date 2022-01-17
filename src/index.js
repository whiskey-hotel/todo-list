import "./main.css";
import { home } from "./modules/projectLists";
import * as pageRender from "./modules/DOMController";

const main = pageRender.newElement("div", "container", "content");

pageRender.moduleRender(home(), main);


pageRender.sendToBody(main);
