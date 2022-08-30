let loadedPage = document.createDocumentFragment();
let header = document.createElement("header")
let main = document.createElement("main");
let sidebar = document.createElement("aside");
let footer = document.createElement("footer");
let wrapper = document.createElement("div");
wrapper.classList.add('wrapper')
let headerWrapper = document.createElement("div");
headerWrapper.classList.add('header-wrapper')
let footerWrapper = document.createElement("div");
footerWrapper.classList.add('footer-wrapper')

loadedPage.append(header);
header.append(headerWrapper);
wrapper.append(main);
wrapper.append(sidebar);
loadedPage.append(wrapper);
loadedPage.append(footer);
footer.append(footerWrapper);
document.body.append(loadedPage);

fetch('./books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        });