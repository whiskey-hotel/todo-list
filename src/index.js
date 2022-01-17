import "./main.css";
import { home } from "./modules/projectLists";
import { sendToBody } from "./modules/DOMController";

sendToBody(home());
