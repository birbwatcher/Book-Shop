
export default function checkForms() {
    let reqForms = document.querySelectorAll('.required');

    for (let i=0;i<reqForms.length;i++) {
        console.log(reqForms[i].value.length)
        if (reqForms[i].value.length === 0) {
            reqForms[i].classList.add('error');
        } else { 
            reqForms[i].classList.remove('error');
        }
    }
}

