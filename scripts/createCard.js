import createElement from "./createElement.js";
import {books, cardContainer} from "../script.js";
import getPopUp from "./getPopUp.js"
import addToCart from "./cart.js";

export default function createCard(x) {
    for (let i=0;i<books.length;i++) {
        let card = createElement("div", "card-item");
         card.id = i;
         cardContainer.append(card);
        let image = document.createElement("img");
         image.src = books[i].imageLink;
         card.append(image);
        let title = document.createElement("h3");
         title.innerHTML = books[i].title
         card.append(title)
        let author = document.createElement("b");
         author.innerHTML = books[i].author;
         card.append(author)
        let bar = createElement("div","bar")
         card.append(bar)
        let price = createElement("span","price");
         bar.append(price)
         price.innerHTML = '$' + books[i].price;
        let addToCartBtn = document.createElement("button");
        let addedButton = createElement("button", "added");
        addToCartBtn.setAttribute('data', i);
        addToCartBtn.innerHTML = "Add to Cart";
        addToCartBtn.classList.add('add-to-cart')
        addedButton.innerHTML = "Added";
         bar.append(addToCartBtn);
         bar.append(addedButton);
         addedButton.classList.add('added-to-cart');
        let fastView = createElement("button","fast-view")
         fastView.innerHTML = "Fast View";
         card.append(fastView);

         fastView.onclick = function () {
            getPopUp(this.parentNode.id);
        }

        addToCartBtn.onclick = function (event) {
            addToCart(event.target.getAttribute('data'));
        }
    }
}