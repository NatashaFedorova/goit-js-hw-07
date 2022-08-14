import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
gallery.innerHTML = createGalleryEl(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryEl(galleryItems) {
  return galleryItems
    .map(
      el =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${el.original}">
                <img
                  class="gallery__image"
                  src="${el.preview}"
                  alt="${el.description}"
                />
            </a>
        </li>`
    )
    .join('');
}
