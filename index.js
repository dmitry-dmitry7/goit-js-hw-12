import{a as d,S as f,i as a}from"./assets/vendor-CRJeqrVC.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(i){return d.get("https://pixabay.com/api/",{params:{key:"54671046-ae95888271e1d1b9b249768ad",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"9"}}).then(l=>l.data.hits)}const n=document.querySelector(".loader"),c=document.querySelector("ul.gallery");let g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function y(i){const l=i.map(t=>`
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
      `).join("");c.innerHTML=l,g.refresh()}function p(){c.innerHTML=""}function h(){n.classList.remove("hidden")}function b(){n.classList.add("hidden")}const u=document.querySelector(".form");u.addEventListener("submit",L);function L(i){i.preventDefault();const l=i.target.elements[0].value.trim();if(!l.length){a.warning({message:"The line must not be empty!",position:"topRight"});return}p(),h(),m(l).then(t=>{const s=t;s.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(s)}).catch(t=>{a.error({message:t.message,position:"topRight"})}).finally(()=>{b()}),u.reset()}
//# sourceMappingURL=index.js.map
