import {books} from "../script.js";
import {cart} from "../scripts/cart.js";
import addToCart from "./cart.js";

export default function getPopUp(bookId) {
    document.querySelector('.blackout').classList.add('active');
    document.querySelector('.popup').classList.add('active');
    let close = document.querySelector('.close');
    let blackout = document.querySelector('.blackout');

    function closePopUp() {
        document.querySelector('.blackout').classList.remove('active');
        document.querySelector('.popup').classList.remove('active');
    }
 
    close.onclick = function () {
        closePopUp()
    }

    blackout.onclick = function () {
        closePopUp();
    }
    document.querySelector('.popup-product-image').src = books[bookId].imageLink;
    document.querySelector('.description').innerHTML = books[bookId].description;
    document.querySelector('.price').innerHTML = 'Price: $' + books[bookId].price;
    document.querySelector('.book-author').innerHTML = books[bookId].author;
    document.querySelector('.book-title').innerHTML = books[bookId].title;
    document.querySelector('.bar button').setAttribute('data', bookId);
   
    function alreadyInCart(bookId) {
        if (cart.find(item => Object.keys(item).toString() === bookId)) {
            return true;
        } else return false;
    }

    if (alreadyInCart(bookId)) {
        document.querySelector('.popup-content .add-to-cart').classList.add('added-to-cart');
        document.querySelector('.popup-content .added').classList.remove('added-to-cart');
    }  else {
        document.querySelector('.popup-content .add-to-cart').classList.remove('added-to-cart');
        document.querySelector('.popup-content .added').classList.add('added-to-cart');
    }
    
    document.querySelector('.add-to-cart').onclick = function (event) {
        addToCart(event.target.getAttribute('data'));
        document.querySelector('.popup-content .add-to-cart').classList.add('added-to-cart');
        document.querySelector('.popup-content .added').classList.remove('added-to-cart');

        document.querySelectorAll('.card-item .add-to-cart')[bookId].classList.add('added-to-cart');
        document.querySelectorAll('.card-item .added')[bookId].classList.remove('added-to-cart');
    }


}