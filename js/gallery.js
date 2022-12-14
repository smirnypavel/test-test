import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const markAp = galleryItems.map(({ preview, original, description }) => `<li class="gallery__link">
<a class="gallery__item" href="${original}">
<img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    // alt="${description}"
    />
</a>
</li>`).join('');
console.log(markAp);

galleryRef.insertAdjacentHTML('beforeend', markAp);
galleryRef.addEventListener

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionDelay: 250,
});