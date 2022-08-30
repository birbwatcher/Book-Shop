let loadedPage = document.createDocumentFragment();
let header = document.createElement("header")
let main = document.createElement("main");
let sidebar = document.createElement("aside");
let footer = document.createElement("footer");
let wrapper = document.createElement("div");
wrapper.classList.add('wrapper')
let headerWrapper = document.createElement("div");
headerWrapper.classList.add('header-wrapper')
let footerWrapper = document.createElement("div");
footerWrapper.classList.add('footer-wrapper')
let logo = document.createElement("div");
logo.classList.add('logo');
let cardContainer = document.createElement("div");
cardContainer.classList.add('cards-container');
let cart = document.createElement("div");
cart.classList.add('cart');

loadedPage.append(header);
header.append(headerWrapper);
wrapper.append(main);
wrapper.append(sidebar);
loadedPage.append(wrapper);
loadedPage.append(footer);
footer.append(footerWrapper);
document.body.append(loadedPage);
headerWrapper.append(logo)
main.append(cardContainer);
sidebar.append(cart)

function createCard() {
    for (i=0;i<books.length;i++) {
        let card = document.createElement("div");
        card.classList.add('card-item');
        cardContainer.append(card);
    }
}

let books;

async function getBooks() {
    let result = await fetch("./books.json");
    let array = await result.json();
    books = await array;
}

async function shopInit() {
    await getBooks();
    for (i=0;i<books.length;i++) {
        createCard();
    }
}
shopInit();

