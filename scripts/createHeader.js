import createElement from "./createElement.js";
import {loadedPage} from "../script.js";

export default function createHeader() {
    let header = document.createElement("header");
    let headerWrapper = createElement("div","header-wrapper")
    header.append(headerWrapper);
    let logo = createElement("a","logo");
    logo.href = "index.html";
    let logoImg = document.createElement("img");
    logoImg.src = "./assets/logo.png";
    logoImg.alt = "JS Book Store"
    logo.append(logoImg)
    headerWrapper.append(logo)
    loadedPage.append(header);
}