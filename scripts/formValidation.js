import createElement from "./createElement.js";

export default function checkForms() {
   
    // let reqForms = document.querySelectorAll('.required');

    // reqForms.forEach(function(item) {
    //     if (item.value.length === 0) {
    //         item.classList.add('error');
    //         item.nextSibling.innerHTML = "This field is mandatory";
    //     } else { 
    //         item.classList.remove('error');
    //         item.nextSibling.innerHTML = "";
    //     }
    // })
    
    let fieldName = document.getElementById('name');
    let fieldSurname = document.getElementById('surname');
    let fieldStreet = document.getElementById('street');
    let fieldHouse = document.getElementById('house-number');

    fieldName.onblur = function() {
        isFieldBlank(fieldName);
    }

    fieldSurname.onblur = function() {
        isFieldBlank(fieldSurname);
    }

    fieldStreet.onblur = function() {
        isFieldBlank(fieldStreet);
    }

    fieldHouse.onblur = function() {
        isFieldBlank(fieldHouse);
    }

}

function isFieldBlank(field) {
    if (field.value.length === 0) {
        field.classList.add('error');
        field.nextSibling.innerHTML = "This field is mandatory";
    } else {
        field.classList.remove('error');
        field.nextSibling.innerHTML = "";
    }
}




