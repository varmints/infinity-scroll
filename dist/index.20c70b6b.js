!function(){const t=document.getElementById("image-container"),e=document.getElementById("loader");let n=!1,o=0,i=0,c=[],l=!0;let d="https://api.unsplash.com/photos/random?client_id=rEeDq9-DE5s-0qzvWlktZElpdFybK95Q_gSbvm83310&count=5";function a(){o++,o===i&&(n=!0,e.hidden=!0)}function s(t,e){for(const n in e)t.setAttribute(n,e[n])}async function r(){try{const e=await fetch(d);c=await e.json(),o=0,i=c.length,c.forEach((e=>{const n=document.createElement("a");s(n,{href:e.links.html,target:"_blank"});const o=document.createElement("img");s(o,{src:e.urls.regular,alt:e.alt_description,title:e.alt_description}),o.addEventListener("load",a),n.appendChild(o),t.appendChild(n)})),l&&(d=`https://api.unsplash.com/photos/random?client_id=rEeDq9-DE5s-0qzvWlktZElpdFybK95Q_gSbvm83310&count=${20}`,l=!1)}catch(t){}}window.addEventListener("scroll",(()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight-1e3&&n&&(n=!1,r())})),r()}();
//# sourceMappingURL=index.20c70b6b.js.map
