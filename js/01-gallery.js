import { galleryItems } from './gallery-items.js';
// Change code below this line

const refGalleryBox = document.querySelector(".gallery")
let instance;

const sortOutGalleryItems = galleryItems.map((element) => {
    return `<div class="gallery__item">
            <a class="gallery__link" href="${element.original}">
                <img
                class="gallery__image"
                src="${element.preview}"
                data-source="${element.original}"
                alt="${element.description}"
                />
            </a>
            </div>`

}).join("")

refGalleryBox.insertAdjacentHTML('afterbegin', sortOutGalleryItems)
refGalleryBox.addEventListener("click", selectImg)


function selectImg(e) {
  e.preventDefault()
  const linkBigImg = e.target.dataset.source;
  if (e.target.nodeName !== "IMG") {
    return
  }
  instance = basicLightbox.create(`<img src="${linkBigImg}"/>`,
    {
      onShow: () => {
        window.addEventListener("keydown", onClick)
      },
      onClose: () => {
        window.removeEventListener("keydown", onClick)
      },
      
    });
  instance.show();


};
function onClick(e) {
  if (e.key === "Escape") {
    instance.close()
  }

}













