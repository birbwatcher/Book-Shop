import createElement from "./createElement.js";
import checkForms from "./formValidation.js";

let checkoutData = {};

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

    giftType.append(chooseGift("gift", "pack as a gift"))
    giftType.append(chooseGift("postcard", "add postcard"))
    giftType.append(chooseGift("discount", "provide 2% discount to the next time"))
    giftType.append(chooseGift("branded-pen", "branded pen or pencil"))

    let submitButton = createElement("button","submit-button");
    submitButton.innerHTML = "Leave Order";
    submitButton.type = "submit";
    checkoutForm.append(submitButton);

    submitButton.onclick = function(e) {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let street = document.getElementById('street').value;
        let houseNumber = document.getElementById('house-number').value;
        let flatNumber = document.getElementById('flat-number').value;
        let deliveryDate = document.getElementById('delivery-date').value;

        checkForms();

        checkoutData.name = name;
        checkoutData.surname = surname;
        checkoutData.street = street;
        checkoutData.houseNumber = houseNumber;
        checkoutData.flatNumber = flatNumber;
        checkoutData.deliveryDate = deliveryDate;
        checkoutData.payment = paymentTypeSelection();
        console.log(checkoutData);

        // return false;
        paymentTypeSelection();
    }
}

function createInput(name, labelName, inputtype, required) {
    let block = createElement("div", name);
    let label = document.createElement("label");
    let input = document.createElement("input");
    label.innerHTML = labelName;
    input.type = inputtype;
    input.name = name;
    input.id = name;

    if (required === true) {
        input.classList.add('required');
    }
    
    block.append(label);
    block.append(input);
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
    block.append(input);
    block.append(label);
    return block;
}

function paymentTypeSelection(){
    let paymentType = document.querySelector('input[name="Payment"]:checked').id;
    return paymentType;
}

function createDateInput(name, labelName)  {
    let block = createElement("div", name);
    let label = document.createElement("label");
    let input = document.createElement("input");
    label.innerHTML = labelName;
    input.type = inputtype;
    input.name = name;
    input.id = name;
    input.min = getTomorrowDate();
    input.value = getTomorrowDate();
    block.append(label);
    block.append(input);
    return block;
}

function getTomorrowDate() {
    let today = new Date();
    let tomorrow = today.getFullYear() + "-" + 0 + (today.getMonth() + 1) + "-" + (today.getDate() + 1);
    return tomorrow;
}