import createElement from "./createElement.js";
import {cart} from "./cart.js";
import {checkDate} from "./checkoutPage.js";

export default function checkForms() {
    let fieldName = document.getElementById('name');
    let fieldSurname = document.getElementById('surname');
    let fieldStreet = document.getElementById('street');
    let fieldHouse = document.getElementById('house-number');
    let fieldFlatNumber = document.getElementById('flat-number');
    let fieldDeliveryDate = document.getElementById('delivery-date');

    fieldFlatNumber.onblur = function() {
        if (fieldFlatNumber.value === '') {
            fieldFlatNumber.classList.add('valid');
            fieldFlatNumber.nextSibling.innerHTML = ""
        } else if (fieldFlatNumber.value.match(/[1-9]+0*(-?[1-9]+0*)*/)) {
            if (fieldFlatNumber.value.match(/[1-9]+0*(-?[1-9]+0*)*/)[0] === fieldFlatNumber.value) {
                fieldFlatNumber.classList.add('valid');
                fieldFlatNumber.classList.remove('error');
                fieldFlatNumber.nextSibling.innerHTML = ""
            } else {
                fieldFlatNumber.classList.remove('valid');
                fieldFlatNumber.classList.add('error');
                fieldFlatNumber.nextSibling.innerHTML = "Positive numbers only";
            }
        } else {
            fieldFlatNumber.classList.remove('valid');
            fieldFlatNumber.classList.add('error');
            fieldFlatNumber.nextSibling.innerHTML = "Positive numbers only";
        }
        checkoutStatus();
    }

    fieldName.onblur = function() {
        isFieldBlank(fieldName);
        if (fieldName.value.match(/^([a-zA-Z ]){4,30}$/)) {
            fieldName.classList.add('valid');
        } else {
            fieldName.nextSibling.innerHTML = "Mandatory, the length not less than 4 symbols";
            fieldName.classList.remove('valid');
            fieldName.classList.add('error');
        }
        checkoutStatus()
    }

    fieldSurname.onblur = function() {
        isFieldBlank(fieldSurname);
        if (fieldSurname.value.match(/^([a-zA-Z ]){5,30}$/)) {
            fieldSurname.classList.add('valid');
        } else {
            fieldSurname.nextSibling.innerHTML = "Mandatory, the length not less than 5 symbols";
            fieldSurname.classList.remove('valid');
            fieldSurname.classList.add('error');
        }
        checkoutStatus()
    }

    fieldStreet.onblur = function() {
        isFieldBlank(fieldStreet);
        if (fieldStreet.value.match(/^([a-zA-Z0-9]){5,30}$/)) {
            fieldStreet.classList.add('valid');
        } else {
            fieldStreet.nextSibling.innerHTML = "Mandatory, the length not less than 5 symbols";
            fieldStreet.classList.remove('valid');
            fieldStreet.classList.add('error');
        }
        checkoutStatus()
    }

    fieldHouse.onblur = function() {
        isFieldBlank(fieldHouse);
        if (fieldHouse.value.match(/^[1-9]+[0-9]*$/)) {
            fieldHouse.classList.add('valid');
        } else {
            fieldHouse.nextSibling.innerHTML = "Only positive numbers allowed";
            fieldHouse.classList.remove('valid');
            fieldHouse.classList.add('error');
        }
        checkoutStatus()
    }

    fieldDeliveryDate.onblur = function() {
        if (!checkDate()) {
            fieldDeliveryDate.nextSibling.innerHTML = "Please choose the date";
            fieldDeliveryDate.classList.remove('valid');
            fieldDeliveryDate.classList.add('error');
        } else {
            fieldDeliveryDate.classList.add('valid');
            fieldDeliveryDate.classList.remove('error');
            fieldDeliveryDate.nextSibling.innerHTML = "";
        }
        checkoutStatus();
    }

}

function isFieldBlank(field) {
    if (field.value.length === 0) {
        field.classList.remove('valid');
        field.classList.add('error');
        field.nextSibling.innerHTML = "This field is mandatory";
    } else {
        field.classList.remove('error');
        field.nextSibling.innerHTML = "";
    }
}

function checkoutStatus() {
    let allInputs = document.querySelectorAll('.required.valid');
    let allErrors = document.querySelectorAll('.error');
    if (allInputs.length === 4 && allErrors.length === 0) {
        document.querySelector('.checkout-submit-button').classList.remove('added-to-cart')
        document.querySelector('.checkout-page-button-inactive').classList.add('added-to-cart')
    }
    if (allInputs.length < 4 || allErrors.length > 0) {
        document.querySelector('.checkout-submit-button').classList.add('added-to-cart');
        document.querySelector('.checkout-page-button-inactive').classList.remove('added-to-cart')

    }
}




