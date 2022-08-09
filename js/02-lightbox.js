import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listGalleryRef = document.querySelector(".gallery")



const ortOutGalleryItems = galleryItems.map(({original, preview, description}) =>{
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    </div>`
}).join('');





listGalleryRef.insertAdjacentHTML('afterbegin',ortOutGalleryItems)

let ligthBox = new SimpleLightbox('.gallery a',{
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});


