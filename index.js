import{a as v,S,i}from"./assets/vendor-CRJeqrVC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();async function g(s,r){return await v.get("https://pixabay.com/api/",{params:{key:"54671046-ae95888271e1d1b9b249768ad",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:"15"}}).then(t=>t.data)}const m=document.querySelector("ul.gallery"),y=document.querySelector(".loader"),f=document.querySelector(".load-more-btn");let x=new S(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const r=s.map(t=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
          <div class = "gallery-text">
            <ul class = "gallery-text-list">
              <li><b>Likes</b></li>
              <li>${t.likes}</li>
            </ul>
            <ul class = "gallery-text-list">
              <li><b>Views</b></li>
              <li>${t.views}</li>
            </ul>
            <ul class = "gallery-text-list">
              <li><b>Comments</b></li>
              <li>${t.comments}</li>
            </ul>
            <ul class = "gallery-text-list">
              <li><b>Downloads</b></li>
              <li>${t.downloads}</li>
            </ul>                        
          </div>
        </a>
      </li>
      `).join("");m.insertAdjacentHTML("beforeend",r),x.refresh()}function q(){m.innerHTML=""}function p(){y.classList.remove("hidden")}function b(){y.classList.add("hidden")}function L(){f.classList.remove("hidden")}function u(){f.classList.add("hidden")}const w=document.querySelector(".form"),M=document.querySelector(".load-more-btn");w.addEventListener("submit",R);let a="",l,d;async function R(s){if(s.preventDefault(),l=1,u(),a=s.target.elements[0].value.trim(),!a.length){i.warning({message:"The line must not be empty!",position:"topRight"});return}q(),p();try{const r=await g(a,l);d=Math.ceil(r.totalHits/15);const t=r.hits;t.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(h(t),d>1&&(L(),l++))}catch(r){i.error({message:r.message,position:"topRight"})}finally{b()}w.reset()}M.addEventListener("click",$);async function $(s){u(),p();try{const t=(await g(a,l)).hits;h(t);const e=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy(0,e.height*2),L(),l===d?(i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u()):l++}catch(r){i.error({message:r.message,position:"topRight"})}finally{b()}}
//# sourceMappingURL=index.js.map
