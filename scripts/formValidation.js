import createElement from "./createElement.js";
import {cart} from "./cart.js";

export default function checkForms() {
    let fieldName = document.getElementById('name');
    let fieldSurname = document.getElementById('surname');
    let fieldStreet = document.getElementById('street');
    let fieldHouse = document.getElementById('house-number');
    let fieldFlatNumber = document.getElementById('flat-number');

    fieldName.onblur = function() {
        isFieldBlank(fieldName);
        if (fieldName.value.match(/^([a-zA-Z ]){4,30}$/)) {
            fieldName.classList.add('valid');
        } else {
            fieldName.nextSibling.innerHTML = "Mandatory, the length not less than 4 symbols";
        }
        checkoutStatus()
    }

    fieldSurname.onblur = function() {
        isFieldBlank(fieldSurname);
        if (fieldSurname.value.match(/^([a-zA-Z ]){5,30}$/)) {
            fieldSurname.classList.add('valid');
        } else {
            fieldSurname.nextSibling.innerHTML = "Mandatory, the length not less than 5 symbols";
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
        }
        checkoutStatus()
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
    console.log(cart.length);
    let allInputs = document.querySelectorAll('.required.valid');
    if (allInputs.length === 4 && cart.length > 0) {
        document.querySelector('.submit-button').classList.remove('added-to-cart')
    }
    if (allInputs.length < 4 || cart.length === 0) {
        document.querySelector('.submit-button').classList.add('added-to-cart');

    }
}




