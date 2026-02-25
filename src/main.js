import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions';

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more-btn");

form.addEventListener("submit", handleSubmit);

let searchText = "";
const perPage = 15;
let page;
let totalPages;

hideLoadMoreButton();

async function handleSubmit(event) {
  event.preventDefault();
  page = 1;
  hideLoadMoreButton();

  searchText = event.target.elements[0].value.trim();
  if(!searchText.length) {
    iziToast.warning({
      message: 'The line must not be empty!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();  
  showLoader();
  try {
    const response = await getImagesByQuery(searchText, page);
    
    totalPages = Math.ceil(response.totalHits / perPage);
    const images = response.hits; 
    if (images.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      createGallery(images);
      if (totalPages > 1) {
        showLoadMoreButton();
        page++;
      } else {
          iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
            position: 'topRight',
          });
      }
    }
  } catch(error) {
  	  iziToast.error({
        message: error.message,
        position: 'topRight',
      });
  } finally {
      hideLoader();
  }
  form.reset();
}

loadMoreBtn.addEventListener("click", handleClick);

async function handleClick(event) {
  hideLoadMoreButton();
  showLoader();
  try {
    const response = await getImagesByQuery(searchText, page);
    const images = response.hits;
    createGallery(images);
    const box = document.querySelector(".gallery-item");
    const rect = box.getBoundingClientRect();
    window.scrollBy(0, rect.height * 2);
    
    showLoadMoreButton();
    if (page === totalPages) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      hideLoadMoreButton();
    } else {
        page++;
    }
  } catch(error) {
  	  iziToast.error({
        message: error.message,
        position: 'topRight',
      });
    } finally {
      hideLoader();
  }
}