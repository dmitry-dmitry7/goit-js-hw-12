import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const loader = document.querySelector(".loader");
const gallery = document.querySelector("ul.gallery");

let galleryShow =  new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

export function createGallery(images) {
  const content = images
    .map((image) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
          />
          <div class = "gallery-text">
            <ul class = "gallery-text-list">
              <li><b>Likes</b></li>
              <li>${image.likes}</li>
            </ul>
            <ul class = "gallery-text-list">
              <li><b>Views</b></li>
              <li>${image.views}</li>
            </ul>
            <ul class = "gallery-text-list">
              <li><b>Comments</b></li>
              <li>${image.comments}</li>
            </ul>
            <ul class = "gallery-text-list">
              <li><b>Downloads</b></li>
              <li>${image.downloads}</li>
            </ul>                        
          </div>
        </a>
      </li>
      `)
    .join("");
  gallery.innerHTML = content;
  galleryShow.refresh();
}

export function clearGallery() {
  gallery.innerHTML = "";
}

export function showLoader() {
  loader.classList.remove("hidden");
}

export function hideLoader() {
  loader.classList.add("hidden");
}

export function showLoadMoreButton() {}

export function hideLoadMoreButton() {}