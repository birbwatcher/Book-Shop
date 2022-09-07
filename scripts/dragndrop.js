import addToCart from "./cart.js";

export default function ddInit() {
    let dropArea = document.querySelector('.cart-container');
    let ddItems = document.querySelectorAll('.card-item');
    let clicked;
    for (let i=0;i<ddItems.length;i++) {
        ddItems[i].draggable = true;
        ddItems[i].onmousedown = function() {
           clicked = ddItems[i].id;
        }
    }

    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropArea.addEventListener(`drop`, (e) => {
        console.log(clicked)
        addToCart(clicked)
    });
}

