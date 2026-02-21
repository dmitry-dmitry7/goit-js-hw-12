import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';


const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const searchText = event.target.elements[0].value.trim();
  if(!searchText.length) {
    iziToast.warning({
      message: 'The line must not be empty!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();  
  showLoader();
  getImagesByQuery(searchText)
    .then(response => {
      const images = response; 
      if (images.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        createGallery(images);
      }
    })
    .catch(error => {
  	  iziToast.error({
        message: error.message,
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
    
  form.reset();
}


  