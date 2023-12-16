import { galleryItems } from "./gallery-items.js";
import simpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const div = document.querySelector("ul.gallery");

for (const item of galleryItems) {
  const html = `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>`;
  div.insertAdjacentHTML("beforeend", html);
}
function renderGallery() {
  galleryItems.forEach((item) => {
    const galleryItem = document.createElement("li");
    galleryItem.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = item.original;

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src = item.preview;
    image.alt = item.description;

    link.appendChild(image);
    galleryItem.appendChild(link);
    div.appendChild(galleryItem);
  });
}

renderGallery();

new SimpleLightbox('.gallery a', { /* options */ });

console.log(galleryItems);