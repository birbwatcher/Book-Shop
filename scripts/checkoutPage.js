import createElement from "./createElement.js";

export default function createCheckout() {
    let checkoutContainer = createElement("div","checkout-container");
    let checkoutHeader = createElement("h1","checkout-header");
    checkoutHeader.innerHTML = "Checkout";
    document.querySelector('main').append(checkoutContainer);
    checkoutContainer.append(checkoutHeader);
    let checkoutForm = createElement("form","checkout-form");
    checkoutContainer.append(checkoutForm)
    let userData = createElement("div","user-data");
    let paymentType = createElement("div","payment-type");
    checkoutForm.append(userData);
    checkoutForm.append(paymentType);
    
    let paymentHeader = createElement("h2","checkout-header");
    paymentHeader.innerHTML = "Choose the payment type:"
    paymentType.append(paymentHeader);

    let giftType = createElement("div","gift-type");
    let giftHeader = createElement("h2","gift-header");
    giftHeader.innerHTML = "Choose 2 gifts: (optional)"
    giftType.append(giftHeader);
    checkoutForm.append(giftType);

    userData.append(createInput("name","Name:", "text"));
    userData.append(createInput("surname","Surname:", "text"));
    userData.append(createInput("street","Your Street:", "text"));
    userData.append(createInput("house-number","House Number:", "text"));
    userData.append(createInput("flat-number","Flat Number:", "text"));
    userData.append(createInput("delivery-date","Preferable Delivery Date:", "date"));
    
    // let cardPayment = createInput("by-card","By Card", "radio");
    // let cashPayment = createInput("by-cash","By Cash", "radio")
    // cardPayment.name = "payment";
    // cashPayment.name = "payment";
    paymentType.append(createPayment("card", "Card"));
    paymentType.append(createPayment("cash", "Cash"));

    giftType.append(chooseGift("gift", "pack as a gift"))
    giftType.append(chooseGift("postcard", "add postcard"))
    giftType.append(chooseGift("discount", "provide 2% discount to the next time"))
    giftType.append(chooseGift("branded-pen", "branded pen or pencil"))
}

function createInput(name, labelName, inputtype) {
    let block = createElement("div", name);
    let label = document.createElement("label");
    let input = document.createElement("input");
    label.innerHTML = labelName;
    input.type = inputtype;
    block.append(label);
    block.append(input);
    return block;
}

function createPayment(name, labelName) {
    let block = createElement("div", name);
    let label = document.createElement("label");
    let input = document.createElement("input");
    label.innerHTML = labelName;
    input.type = "radio";
    input.name = "Payment";
    block.append(input);
    block.append(label);
    return block;
}

function chooseGift(name, labelName) {
    let block = createElement("div", name);
    let label = document.createElement("label");
    let input = document.createElement("input");
    label.innerHTML = labelName;
    input.type = "checkbox";
    block.append(input);
    block.append(label);
    return block;
}