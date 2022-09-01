let loadedPage = document.createDocumentFragment();
let wrapper = createElement("div","wrapper")
let cardContainer = createElement("div","cards-container")
let books;

import createElement from "./scripts/createElement.js";
import createHeader from "./scripts/createHeader.js";
import createMain from "./scripts/createMain.js";
import createFooter from "./scripts/createFooter.js";
import createCard from "./scripts/createCard.js";
import popUp from "./scripts/popUp.js";

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

    loadedPage.append(wrapper);
    loadedPage.append(createFooter());
    document.body.append(loadedPage);
}

shopInit();
// popUp();

export {loadedPage};
export {wrapper};
export {cardContainer};
export {books};
