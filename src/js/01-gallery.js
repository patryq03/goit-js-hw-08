import { galleryItems } from "./gallery-items.js";
// Change code below this line
const div = document.querySelector("ul.gallery");
let instance;
for (const image of galleryItems) {
  const html = `<div class="gallery__item">
    <a class="gallery__link" href=${image.original}>
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </div>`;
  div.insertAdjacentHTML("beforeend", html);
}

function handleClick(event) {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const selectedImage = event.target.dataset.source;
    instance = basicLightbox.create(
      `
  		<img width="1400" height="900" src="${selectedImage}">
  	`
    );
    instance.show();

    document.addEventListener("keydown", closePreview);
  }
}

function closePreview(event) {
  if (event.key == "Escape") {
    console.log("naciśnięto esc");
    document.removeEventListener("keydown", closePreview);
    instance.close();
  }
}
div.addEventListener("click", handleClick);
