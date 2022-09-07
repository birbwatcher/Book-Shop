let loadedPage = document.createDocumentFragment();
let wrapper = createElement("div","wrapper")
let cardContainer = createElement("div","cards-container")
let books;

import createElement from "./scripts/createElement.js";
import createHeader from "./scripts/createHeader.js";
import createMain from "./scripts/createMain.js";
import createFooter from "./scripts/createFooter.js";
import createCard from "./scripts/createCard.js";
import createPopUp from "./scripts/createPopUp.js";
import ddInit from "./scripts/dragndrop.js";

async function getBooks() {
    let result = await fetch("./books.json");
    let array = await result.json();
    books = await array;
}

async function shopInit() {
    createHeader();
    createMain();
    await getBooks();
    createCard();
    createFooter();
    createPopUp();
    loadedPage.append(wrapper);
    loadedPage.append(createFooter());
    document.body.append(loadedPage);
    ddInit();
}

shopInit();

export {loadedPage};
export {wrapper};
export {cardContainer};
export {books};
