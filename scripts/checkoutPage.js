import createElement from "./createElement.js";

export default function createCheckout() {
    let checkoutContainer = createElement("div","checkout-container")
    document.querySelector('main').append(checkoutContainer);
    let cartName = createElement("h1","cart-name");
    let name = createElement("input","input-name");
    let surname = createElement("input","input-name");
    let street = createElement("input","input-street");
    let houseNum = createElement("input","input-house-number");
    let apt = createElement("input","input-apt-number");

    cartName.innerHTML = 'Cart';

    checkoutContainer.append(cartName);
    checkoutContainer.append(name);
    checkoutContainer.append(surname);
    checkoutContainer.append(street);
    checkoutContainer.append(houseNum);
    checkoutContainer.append(apt);
    
}