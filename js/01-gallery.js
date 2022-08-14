import { galleryItems } from './gallery-items.js';
// // Change code below this line

let instance;

const gallery = document.querySelector('.gallery');
gallery.innerHTML = createGalleryEl(galleryItems);
gallery.addEventListener('click', handlerGalleryClick);

function createGalleryEl(galleryItems) {
  return galleryItems
    .map(
      el =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${el.original}">
            <img
              class="gallery__image"
              src="${el.preview}"
              data-source="${el.original}"
              alt="${el.description}"
            />
          </a>
        </div>`
    )
    .join('');
}

function handlerGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;

  instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" width="800" height="600">
`,
    { onShow: () => window.addEventListener('keydown', onEscapeKeypress) },
    { onClose: () => window.removeEventListener('keydown', onEscapeKeypress) }
  );

  instance.show();
}

function onEscapeKeypress(e) {
  if (e.key === 'Escape') {
    instance.close();
  }
}
