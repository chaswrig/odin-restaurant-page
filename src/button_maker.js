import { pageLoader } from "./page_loader.js";

export function buttonMaker(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", () => {
        const contentBox = document.getElementById("content");
        contentBox.replaceChildren();
        pageLoader(buttonId);
    });
}