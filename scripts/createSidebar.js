import {wrapper} from "../script.js";
import createElement from "./createElement.js";
import createCartContainer from "./createCartContainer.js";

export default function createSidebar() {
    let sidebar = document.createElement("aside");
    let cart = createElement("div","cart")
    let yourCart = createElement("b", "your-cart");
    let total = createElement("b", "total");
    let checkoutBtn = createElement("button","checkout-button");
    let checkoutBtnInact = createElement("button","checkout-button-inactive");
    checkoutBtn.classList.add("added-to-cart");
    checkoutBtn.innerHTML = "Checkout";
    checkoutBtnInact.innerHTML = "Checkout";
    sidebar.append(cart);
    yourCart.innerHTML = "Your cart:";
    total.innerHTML = "Total: $0"
    cart.append(yourCart);
    cart.append(createCartContainer());
    cart.append(total);
    cart.append(checkoutBtn);
    cart.append(checkoutBtnInact);
    wrapper.append(sidebar)

    checkoutBtn.onclick = function() {
        console.log('order!');
        document.querySelector('.cards-container').innerHTML = '';
    }
}

