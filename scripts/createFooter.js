import createElement from "./createElement.js";

export default function createFooter() {
    let footer = document.createElement("footer");
    let footerWrapper = createElement("div","footer-wrapper");
    footer.append(footerWrapper);
    return footer;
}