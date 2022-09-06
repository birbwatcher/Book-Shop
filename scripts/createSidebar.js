import {wrapper} from "../script.js";
import createElement from "./createElement.js";
import createCartContainer from "./createCartContainer.js";

export default function createSidebar() {
    let sidebar = document.createElement("aside");
    let cart = createElement("div","cart")
    let yourCart = createElement("b", "your-cart");
    let total = createElement("b", "total")
    sidebar.append(cart);
    yourCart.innerHTML = "Your cart:";
    total.innerHTML = "Total: $0"
    cart.append(yourCart);
    cart.append(createCartContainer());
    cart.append(total);
    wrapper.append(sidebar)
}