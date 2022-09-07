let cart = [];
import createElement from "./createElement.js";
import {books} from "../script.js";

export default function addToCart(bookData) {
    if (!alreadyInCart(bookData)) {
        let book = {};
        book[bookData] = 1;
        cart.push(book);
        document.querySelectorAll('.add-to-cart')[bookData].classList.add('added-to-cart');
        document.querySelectorAll('.added')[bookData].classList.remove('added-to-cart');
    } else {
        bookPlus(bookData);
    }
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
            bookPlus(event.target.getAttribute('data'))
            renderCart();
        }
    }
    for (let i=0;i<minuses.length;i++) {
        minuses[i].onclick = function() {
            bookMinus(event.target.getAttribute('data'))
            renderCart();
        }
    }
    document.querySelector('.total').innerHTML = 'Total: $' + getTotalPrice();
    if (getTotalPrice() > 0) {
        document.querySelector('.checkout-button-inactive').classList.add('added-to-cart');
        document.querySelector('.checkout-button').classList.remove('added-to-cart');
    } else {
        document.querySelector('.checkout-button-inactive').classList.remove('added-to-cart');
        document.querySelector('.checkout-button').classList.add('added-to-cart');
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
                document.querySelectorAll('.card-item .bar .added-to-cart')[bookId].classList.remove('added-to-cart');
                document.querySelectorAll('.card-item .bar .added')[bookId].classList.add('added-to-cart');

            }
        }
    }
}

function getTotalPrice(){
    let sum = 0;
    for (let i = 0;i<cart.length;i++) {
        sum = sum + books[Object.keys(cart[i])].price * cart[i][Object.keys(cart[i])];
    }
    return sum;
}

export function alreadyInCart(bookId) {
    if (cart.find(item => Object.keys(item).toString() === bookId)) {
        return true;
    } else return false;
}


export {cart};