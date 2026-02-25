import{a as v,S,i}from"./assets/vendor-CRJeqrVC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function g(s,t){return(await v.get("https://pixabay.com/api/",{params:{key:"54671046-ae95888271e1d1b9b249768ad",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:"15"}})).data}const m=document.querySelector("ul.gallery"),y=document.querySelector(".loader"),f=document.querySelector(".load-more-btn");let x=new S(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const t=s.map(o=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}">
          <img
            class="gallery-image"
            src="${o.webformatURL}"
            alt="${o.tags}"
          />
          <div class = "gallery-text">
            <ul class = "gallery-text-list">
              <li><b>Likes</b></li>
              <li>${o.likes}</li>
            </ul>
            <ul class = "gallery-text-list">
              <li><b>Views</b></li>
              <li>${o.views}</li>
            </ul>
            <ul class = "gallery-text-list">
              <li><b>Comments</b></li>
              <li>${o.comments}</li>
            </ul>
            <ul class = "gallery-text-list">
              <li><b>Downloads</b></li>
              <li>${o.downloads}</li>
            </ul>                        
          </div>
        </a>
      </li>
      `).join("");m.insertAdjacentHTML("beforeend",t),x.refresh()}function q(){m.innerHTML=""}function p(){y.classList.remove("hidden")}function b(){y.classList.add("hidden")}function L(){f.classList.remove("hidden")}function a(){f.classList.add("hidden")}const w=document.querySelector(".form"),R=document.querySelector(".load-more-btn");w.addEventListener("submit",M);let n="",l,d;a();async function M(s){if(s.preventDefault(),l=1,a(),n=s.target.elements[0].value.trim(),!n.length){i.warning({message:"The line must not be empty!",position:"topRight"});return}q(),p();try{const t=await g(n,l);d=Math.ceil(t.totalHits/15);const o=t.hits;o.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(h(o),d>1?(L(),l++):i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){i.error({message:t.message,position:"topRight"})}finally{b()}w.reset()}R.addEventListener("click",$);async function $(s){a(),p();try{const o=(await g(n,l)).hits;h(o);const e=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy(0,e.height*2),L(),l===d?(i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a()):l++}catch(t){i.error({message:t.message,position:"topRight"})}finally{b()}}
//# sourceMappingURL=index.js.map
