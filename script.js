let loadedPage = document.createDocumentFragment();
let header = document.createElement("header")
let main = document.createElement("main");
let sidebar = document.createElement("aside");
let wrapper = document.createElement("div");
wrapper.classList.add('wrapper')
let headerWrapper = document.createElement("div");
headerWrapper.classList.add('header-wrapper')

loadedPage.append(header);
header.append(headerWrapper);
wrapper.append(main);
main.append(sidebar);
loadedPage.append(wrapper);
document.body.append(loadedPage);

fetch('./books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        });