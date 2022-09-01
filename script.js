let loadedPage = document.createDocumentFragment();
let wrapper = createElement("div","wrapper")
let cardContainer = createElement("div","cards-container")
let books;

import createElement from "./scripts/createElement.js";
import createHeader from "./scripts/createHeader.js";

// function createElement(element, elementClass) {
//     let newElement = document.createElement(element);
//     newElement.classList.add(elementClass);
//     return newElement;
// }


function createMain() {
    let main = document.createElement("main");
    wrapper.append(main);
    main.append(cardContainer);
    createSidebar();
}

function createSidebar() {
    let sidebar = document.createElement("aside");
    let cart = createElement("div","cart")
    let yourCart = createElement("b", "your-cart");
    let total = createElement("b", "total")
    sidebar.append(cart);
    yourCart.innerHTML = "Your cart:";
    total.innerHTML = "Total:"
    cart.append(yourCart);
    cart.append(createCartContainer());
    cart.append(total);
    wrapper.append(sidebar)
}

function createCartContainer() {
    let cartContainer = createElement("div","cart-container");
    let dragImage = createElement("img","drag-image");
    let title = document.createElement("b");
    title.innerHTML = "Your cart is empty. Just drag and drop the book here";
    dragImage.src = "./assets/dragndrop.png";
    cartContainer.append(dragImage);
    cartContainer.append(title);
    return cartContainer;
}

function createFooter() {
    let footer = document.createElement("footer");
    let footerWrapper = createElement("div","footer-wrapper");

    footer.append(footerWrapper);
    return footer;
}

function createCard(x) {
    for (let i=0;i<books.length;i++) {
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

