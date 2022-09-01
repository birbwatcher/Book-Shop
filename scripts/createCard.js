import createElement from "./createElement.js";
import {books} from "../script.js";
import {cardContainer} from "../script.js";
import createPopUp from "./createPopUp.js";
import getPopUp from "./getPopUp.js"

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
        let addToCard = document.createElement("button");
        addToCard.setAttribute('data', i);
         addToCard.innerHTML = "Add to Cart"
         bar.append(addToCard);
        let fastView = createElement("button","fast-view")
         fastView.innerHTML = "Fast View";
         card.append(fastView);

         fastView.onclick = function () {
            getPopUp(this.parentNode.id);
        }

        // card.onclick = function() {
        //     console.log(this.id);
        // }
    }
}