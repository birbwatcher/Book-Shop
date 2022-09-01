import createElement from "./createElement.js";
import {loadedPage} from "../script.js";

export default function popUp() {
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

export function getPopUp() {
    console.log('meow')
}