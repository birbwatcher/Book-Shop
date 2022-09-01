export default function createElement(element, elementClass) {
    let newElement = document.createElement(element);
    newElement.classList.add(elementClass);
    return newElement
}