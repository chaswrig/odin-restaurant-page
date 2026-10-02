import pizzaImage from "./pizza.jpg"
import { LoremIpsum } from "lorem-ipsum";

export function pageLoader(pageName) {
    const contentBox = document.getElementById("content");
    const headlineBox = document.createElement("div");
    headlineBox.textContent = pageName;
    headlineBox.id = "headline"
    contentBox.appendChild(headlineBox);

    const image = new Image(400);
    image.src = pizzaImage;
    contentBox.appendChild(image);

    const descriptionBox = document.createElement("div");
    descriptionBox.id = "description";
    
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4,
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });

    descriptionBox.textContent = lorem.generateParagraphs(2);
    contentBox.appendChild(descriptionBox);
}