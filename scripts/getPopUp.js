import {books} from "../script.js";

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
    document.querySelector('.price').innerHTML = '$' + books[bookId].price;
    document.querySelector('.book-author').innerHTML = books[bookId].author;
    document.querySelector('.book-title').innerHTML = books[bookId].title;
    document.querySelector('.bar button').setAttribute('data', bookId);
}