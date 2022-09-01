
import createElement from "./createElement.js";

export default function createCartContainer() {
    let cartContainer = createElement("div","cart-container");
    let dragImage = createElement("img","drag-image");
    let title = document.createElement("b");
    title.innerHTML = "Your cart is empty. Just drag and drop the book here";
    dragImage.src = "./assets/dragndrop.png";
    cartContainer.append(dragImage);
    cartContainer.append(title);
    return cartContainer;
}