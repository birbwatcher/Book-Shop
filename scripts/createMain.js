import {wrapper} from "../script.js";
import {cardContainer} from "../script.js";
import createSidebar from "../scripts/createSidebar.js"
import createElement from "./createElement.js";

export default function createMain() {
    let main = document.createElement("main");
    wrapper.append(main);
    main.append(cardContainer);
    createSidebar();
}