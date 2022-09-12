import createElement from "./createElement.js";

export default function checkForms() {
    let reqForms = document.querySelectorAll('.required');


    // for (let i=0;i<reqForms.length;i++) {
    //     console.log(reqForms[i].value.length)
    //     if (reqForms[i].value.length === 0) {
    //         reqForms[i].classList.add('error');
    //         reqForms[i].after(reqLabel);
    //     } else { 
    //         reqForms[i].classList.remove('error');
    //     }
    // }

    reqForms.forEach(function(item) {
        let reqLabel = createElement("span","required-field-label")
        reqLabel.innerHTML = "*this field is mandatory";
        if (item.value.length === 0) {
            item.classList.add('error');
            item.after(reqLabel);
        } else { 
            item.classList.remove('error');
        }
    })

}

