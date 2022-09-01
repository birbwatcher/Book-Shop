import createElement from "./createElement.js";
import {loadedPage} from "../script.js";

export default function popUp() {
    let blackout = createElement("div","blackout");
    let popup = createElement("div","popup");
    let image = createElement("img","popup-product-image");
    let content = createElement("div","popup-content");
    let title = createElement("h3", "book-title");
    let author = createElement("b", "book-author");
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
    let addToCart = document.createElement("button");
    addToCart.innerHTML = "Add to Cart";
    close.src = "./assets/modal-close-button.png";
    bar.append(addToCart);
}

