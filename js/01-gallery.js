import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulEl = document.querySelector(".gallery");
const galleryElements = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></li>`
);
ulEl.insertAdjacentHTML("beforeend", galleryElements.join(""));

function onClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const imgUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imgUrl}" width="800" height="600">
    `);
  instance.show();
}

ulEl.addEventListener("click", onClick);
