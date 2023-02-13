// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = galleryItems.reduce(
  (html, { original, preview, description }) => {
    return (
      html +
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </div>`
    );
  },
  ''
);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
