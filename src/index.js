import "./main.css";
import { home, recall } from "./modules/elementBuilder";
import * as pageRender from "./modules/DOMController";

const main = pageRender.newElement("div", "container", "content");

pageRender.moduleRender(home(), main);
pageRender.sendToBody(main);
recall()
