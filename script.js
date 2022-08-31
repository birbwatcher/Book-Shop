let loadedPage = document.createDocumentFragment();
// let header = document.createElement("header");
let main = document.createElement("main");
let footer = document.createElement("footer");
let wrapper = createElement("div","wrapper")
let headerWrapper = createElement("div","header-wrapper")
let footerWrapper = createElement("div","footer-wrapper")


let cardContainer = createElement("div","cards-container")

loadedPage.append(createHeader());
wrapper.append(main);
wrapper.append(createSidebar());
loadedPage.append(wrapper);
loadedPage.append(footer);
footer.append(footerWrapper);
document.body.append(loadedPage);
main.append(cardContainer);

function createElement(element, elementClass) {
    let newElement = document.createElement(element);
    newElement.classList.add(elementClass);
    return newElement;
}

function createHeader() {
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
    return header
}

function createSidebar() {
    let sidebar = document.createElement("aside");
    let cart = createElement("div","cart")
    sidebar.append(cart);
    return sidebar;
}

function createCard(x) {
    for (i=0;i<books.length;i++) {
        let card = createElement("div", "card-item");
         card.id = i+1;
         cardContainer.append(card);
        let image = document.createElement("img");
         image.src = books[i].imageLink;
         card.append(image);
        let title = document.createElement("h3");
         title.innerHTML = books[i].title
         card.append(title)
        let author = document.createElement("b");
         author.innerHTML = books[i].author;
         card.append(author)
        let bar = createElement("div","bar")
         card.append(bar)
        let price = createElement("span","price");
         bar.append(price)
         price.innerHTML = '$' + books[i].price;
        let addToCard = document.createElement("button");
         addToCard.innerHTML = "Add to Cart"
         bar.append(addToCard);
        let fastView = createElement("button","fast-view")
         fastView.innerHTML = "Fast View";
         card.append(fastView);
    }
}

function createCart() {
    let cart = createElement("div","cart")
    sidebar.append(cart);
}

let books;

async function getBooks() {
    let result = await fetch("./books.json");
    let array = await result.json();
    books = await array;
}

async function shopInit() {
    await getBooks();
    createCard();
    // createCart();
}
shopInit();
