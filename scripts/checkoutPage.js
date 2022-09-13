import createElement from "./createElement.js";
import checkForms from "./formValidation.js";
import {cart} from "./cart.js"
import {books} from "../script.js";
import {getTotalPrice} from "./cart.js"

let checkoutData = {};
let userGifts = [];

export default function createCheckout() {
    let checkoutContainer = createElement("div","checkout-container");
    let checkoutHeader = createElement("h1","checkout-header");
    checkoutHeader.innerHTML = "Checkout";
    document.querySelector('main').append(checkoutContainer);
    checkoutContainer.append(checkoutHeader);
    let checkoutForm = createElement("form","checkout-form");
    checkoutForm.id = "form";
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

    userData.append(createInput("name","Name:", "text", true));
    userData.append(createInput("surname","Surname:", "text", true));
    userData.append(createInput("street","Your Street:", "text", true));
    userData.append(createInput("house-number","House Number:", "text", true));
    userData.append(createInput("flat-number","Flat Number:", "text"));
    userData.append(createInput("delivery-date","Preferable Delivery Date:", "date"));
    document.getElementById('delivery-date').setAttribute("min", getTomorrowDate())
    document.getElementById('delivery-date').setAttribute("value", getTomorrowDate())

    paymentType.append(createPayment("card", "Card", true));
    paymentType.append(createPayment("cash", "Cash"));

    giftType.append(chooseGift("pack-as-gift", "pack as a gift"))
    giftType.append(chooseGift("postcard", "add postcard"))
    giftType.append(chooseGift("discount", "provide 2% discount to the next time"))
    giftType.append(chooseGift("branded-pen", "branded pen or pencil"))

    let submitButton = createElement("button","checkout-submit-button");
    submitButton.classList.add('added-to-cart')
    submitButton.innerHTML = "Leave Order";
    submitButton.type = "submit";
    checkoutForm.append(submitButton);

    let inactiveSubmitButton = createElement("button","checkout-page-button-inactive");
    inactiveSubmitButton.innerHTML = "Leave Order";
    checkoutForm.append(inactiveSubmitButton);

    inactiveSubmitButton.onclick = function(e) {
        e.preventDefault();
    }

    submitButton.onclick = function(e) {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let street = document.getElementById('street').value;
        let houseNumber = document.getElementById('house-number').value;
        let flatNumber = document.getElementById('flat-number').value;
        let deliveryDate = document.getElementById('delivery-date').value;
        let gifts = document.querySelectorAll('.gift:checked')
        
        for (let i = 0; i<gifts.length; i++) {
            userGifts.push(gifts[i].value);
        }

        checkoutData.name = name;
        checkoutData.surname = surname;
        checkoutData.street = street;
        checkoutData.houseNumber = houseNumber;
        checkoutData.flatNumber = flatNumber;
        checkoutData.deliveryDate = deliveryDate;
        checkoutData.payment = paymentTypeSelection();
        console.log(checkoutData);
        console.log(userGifts);

        document.querySelector('.cart').remove();

        paymentTypeSelection();
        orderCreated()
    }

    let checkboxes = document.querySelectorAll('.gift');

    for (let i=0;i<checkboxes.length;i++) {
        checkboxes[i].onclick = function () {
            let checked = document.querySelectorAll('.gift:checked');
            if (checked.length == 2) {
                maximumGifts()
            } else {
                moreGifts()
            }
        }
    }

    function maximumGifts() {
        let checkboxes = document.querySelectorAll('.gift:not(:checked)');
        checkboxes.forEach(item => item.disabled = true)
    }

    function moreGifts() {
        let checkboxes = document.querySelectorAll('.gift:not(:checked)');
        checkboxes.forEach(item => item.disabled = false)
    }

    checkForms()
}

function createInput(name, labelName, inputtype, required) {
    let block = createElement("div", name);
    let label = document.createElement("label");
    let input = document.createElement("input");

    let reqLabel = createElement("span","required-field-label")
    reqLabel.innerHTML = "";

    label.innerHTML = labelName;
    input.type = inputtype;
    input.name = name;
    input.id = name;

    if (inputtype === "text") {
        input.classList.add("validate");
    }

    if (required === true) {
        input.classList.add('required');
    }
    
    block.append(label);
    block.append(input);
    block.append(reqLabel);
    return block;
}

function createPayment(name, labelName, checked) {
    let block = createElement("div", name);
    let label = document.createElement("label");
    let input = document.createElement("input");
    label.innerHTML = labelName;
    input.type = "radio";
    input.name = "Payment";
    if (checked) {
        input.checked = true;
    }
    input.id = name;
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
    input.value = labelName;
    // input.disabled = true;
    input.classList.add('gift');
    block.append(input);
    block.append(label);
    return block;
}

function paymentTypeSelection(){
    let paymentType = document.querySelector('input[name="Payment"]:checked').id;
    return paymentType;
}

function getTomorrowDate() {
    let today = new Date();
    let tomorrow = today.getFullYear() + "-" + 0 + (today.getMonth() + 1) + "-" + (today.getDate() + 1);
    return tomorrow;
}

function orderCreated() {
    document.querySelector('.checkout-container').remove();
    let orderContainer = createElement("div","ordered-container");
    let orderHeader = createElement("h1","ordered-header");
    let orderSummary = createElement("h2","order-summary-header");
    let contactSummary = createElement("h2","order-summary-contacts");
    let userName = createElement("p","user-name");
    let street = createElement("p","user-street");
    let house = createElement("p","user-house");
    let apt = createElement("p","apt-number");
    let gifts = createElement("p","gifts");
    let deliveryDate = createElement("p","delivery-date");
    userName.innerHTML = `Name: ${checkoutData.name}` + ' ' + `${checkoutData.surname}`;
    street.innerHTML = `Street: ${checkoutData.street}`;
    house.innerHTML = `House: ${checkoutData.houseNumber}`;
    apt.innerHTML = `Apt: ${checkoutData.flatNumber}`;
    gifts.innerHTML = `Chosen Gifts: ${userGifts}`;
    deliveryDate.innerHTML = `Delivery Date: ${checkoutData.deliveryDate}`;
    document.querySelector('main').append(orderContainer);
    orderContainer.append(orderHeader);
    orderContainer.append(orderSummary);
    orderHeader.innerHTML = "Thanks you for your order!";
    orderSummary.innerHTML = "Order Summary:";
    console.log(cart);

    for (let i = 0; i<cart.length;i++) {
        let book = createElement("p","ordered-book");
        let bookId = Object.keys(cart[i])[0];
        book.innerHTML = books[bookId].title + " - " + cart[i][bookId] + " pcs";
        orderContainer.append(book);   
    }
    let totalPrice = createElement("p","total-price");
    orderContainer.append(totalPrice);   
    totalPrice.innerHTML = 'Total: $' + getTotalPrice() + ` (Payment Type: ${checkoutData.payment})`;
    orderContainer.append(gifts);
    orderContainer.append(contactSummary);   
    contactSummary.innerHTML = "Contacts:"
    orderContainer.append(userName);
    orderContainer.append(street);
    orderContainer.append(house);
    orderContainer.append(apt);
    orderContainer.append(deliveryDate);
}



