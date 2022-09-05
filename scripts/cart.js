// let cart = {};
let cart = [];
import createElement from "./createElement.js";
import {books} from "../script.js";

export default function addToCart(bookData) {
    // cart[bookData] = 1;
    let book = {};
    book[bookData] = 1;
    cart.push(book);
    renderCart()
}

function renderCart() {
    let cartContainer = document.querySelector('.cart-container');
    cartContainer.innerHTML = '';
        for (let i=0;i<cart.length;i++) {
            if (typeof cart[i] !== 'undefined') {
                let bookId = Object.keys(cart[i])[0];
                let count = createElement("p","cart-count");
                let book = createElement("div","cart-book");
                let bookImg =  createElement("img","cart-book-image");
                let bookTitle = createElement("b","cart-book-title");
                let bookInfo = createElement("div","cart-book-info");
                let plus = createElement("div","cart-book-plus");
                let minus = createElement("div","cart-book-minus");
                let cartCountBar = createElement("div","cart-count-bar");
                minus.innerHTML = '-';
                plus.innerHTML = '+';
                minus.setAttribute('data', bookId);
                plus.setAttribute('data', bookId);
                bookImg.src = books[bookId].imageLink;
                bookTitle.innerHTML = books[bookId].title;
                count.innerHTML = 'Count:' + cart[i][bookId];
                book.append(bookImg);
                book.append(bookInfo);
                bookInfo.append(bookTitle);
                bookInfo.append(cartCountBar);
                cartCountBar.append(minus);
                cartCountBar.append(count);
                cartCountBar.append(plus);
                cartContainer.append(book);
            }
        }


    let pluses = document.querySelectorAll('.cart-book-plus');
    let minuses= document.querySelectorAll('.cart-book-minus');
    for (let i=0;i<pluses.length;i++) {
        pluses[i].onclick = function() {
            console.log(cart);
            bookPlus(event.target.getAttribute('data'))
            renderCart();
        }
    }
    for (let i=0;i<minuses.length;i++) {
        minuses[i].onclick = function() {
            console.log(cart);
            bookMinus(event.target.getAttribute('data'))
            renderCart();
        }
    }
}

function bookPlus(bookId) {
    for (let i=0;i<cart.length;i++) {
        if (cart[i].hasOwnProperty(bookId)) {
            cart[i][bookId]++;
        }
    }
}

function bookMinus(bookId) {
    for (let i=0;i<cart.length;i++) {
        if (cart[i].hasOwnProperty(bookId)) {
            if (cart[i][bookId] > 1) {
                cart[i][bookId]--;
            } else if (cart[i][bookId] = 1) {
                cart.splice(i,1);
            }
        }
    }
}

export {cart};