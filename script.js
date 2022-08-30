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

function createCard(x) {
    for (i=0;i<books.length;i++) {
        let card = document.createElement("div");
        card.classList.add("card-item");
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
        let bar = document.createElement("div");
        bar.classList.add("bar");
        card.append(bar)
        let price = document.createElement("span")
        price.classList.add("price")
        bar.append(price)
        price.innerHTML = '$' + books[i].price;
        let addToCard = document.createElement("button");
        addToCard.innerHTML = "Add to Cart"
        bar.append(addToCard);
        let fastView = document.createElement("button");
        fastView.innerHTML = "Fast View";
        fastView.classList.add("fast-view");
        card.append(fastView);
    }
}

function createCart() {
    let cart = document.createElement("div");
    cart.classList.add('cart');
    sidebar.append(cart)
}

let books;

async function getBooks() {
    let result = await fetch("./books.json");
    let array = await result.json();
    books = await array;
}

async function shopInit() {
    await getBooks();
    // for (i=0;i<books.length;i++) {
    //     console.log(i)
        createCard();
    // }
    createCart()
}
shopInit();
