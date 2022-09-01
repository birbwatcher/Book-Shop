let loadedPage = document.createDocumentFragment();
let wrapper = createElement("div","wrapper")
let cardContainer = createElement("div","cards-container")
let books;

import createElement from "./scripts/createElement.js";
import createHeader from "./scripts/createHeader.js";
import createMain from "./scripts/createMain.js";
import createFooter from "./scripts/createFooter.js";
import createCard from "./scripts/createCard.js";


// function createCart() {
//     let cart = createElement("div","cart")
//     let yourCart = document.createElement("b");
//     yourCart.innerHTML = "Your cart:";
//     cart.append(yourCart);
//     sidebar.append(cart);    
// }

function popUp() {
    let blackout = createElement("div","blackout");
    let popup = createElement("div","popup");
    let image = createElement("img","popup-product-image");
    let content = createElement("div","popup-content");
    let title = document.createElement("h3");
    let author = document.createElement("b");
    let price = createElement("span","price");
    let description = createElement("p","description");
    let bar = createElement("div","bar");
    let close = createElement("img","close");
    loadedPage.append(blackout);
    loadedPage.append(popup);
    popup.append(image);
    popup.append(content);
    popup.append(close);
    content.append(title);
    content.append(author);
    content.append(description);
    content.append(bar);
    bar.append(price);
    image.src = "./assets/effective-js.jpg";
    title.innerHTML = "JavaScript: The Good Parts: The Good Parts"
    author.innerHTML = "Douglas Crockford";
    description.innerHTML = "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must";
    price.innerHTML = "Price: $30";
    let addToCard = document.createElement("button");
    addToCard.innerHTML = "Add to Cart";
    close.src = "./assets/modal-close-button.png";
    bar.append(addToCard);
}

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
