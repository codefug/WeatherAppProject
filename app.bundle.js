(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(537),o=t.n(r),i=t(645),a=t.n(i),c=t(667),A=t.n(c),s=new URL(t(681),t.b),l=a()(o()),d=A()(s);l.push([n.id,`:root {\n  --backgroundColor: black;\n}\nhtml{\n  margin: 0;\n  padding: 0;\n  color: white;\n  background-image: url(${d});\n  background-size: cover;\n  height:100vh;\n}\nbody{\n  margin: 0;\n  padding:0;\n}\n::selection {\n  background-color: inherit;\n}\ndialog {\n  width: 300px;\n  height: 200px;\n}\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.486);\n}\n.notification {\n  padding-block: 20px;\n}\n.cancelButton {\n  border-radius: 20px;\n  background-color: rgba(0, 0, 255, 0.336);\n}\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.mainImage {\n  width: 700px;\n  padding-top: 60px;\n}\n.absoluteDescription {\n  position: absolute;\n  font-size: 2rem;\n  top: 0;\n}\n.middleside {\n  position: relative;\n}\n#inputMessage {\n  height: 3rem;\n  font-size: 2.5rem;\n}\n.clickButton {\n  height: 3rem;\n  border-radius: 1rem;\n  background-color: white;\n}\n.clickButton:hover {\n  background-color: rgba(180, 180, 180, 0.322) !important;\n  cursor: pointer;\n}\n.todayWeather {\n  font-size: 30px;\n  font-weight: bold;\n}\n.side {\n  flex: 1;\n}\nform {\n  display: flex;\n  flex-direction: column;\n}\nheader {\n  padding-inline: 40px;\n}\n.descriptionSection {\n}\n.after {\n  text-align: center;\n}\n.afterDescriptionContainer {\n  display: flex;\n  justify-content: space-around;\n}\nh3 {\n  white-space: pre-line;\n  padding-bottom: 100px;\n}\nfooter {\n  bottom: 0;\n  color: white;\n  background-color: black;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  bottom:0;\n  left:0;\n  right:0;\n}\n#loadingbackground {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-image: radial-gradient(\n    rgb(0, 26, 255) 1%,\n    #bdf5ff 30%,\n    rgb(2, 40, 165) 70%\n  );\n  background-size: 300% 300%;\n  background-position: center;\n  animation: 2s linear 1 load;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n}\n@keyframes load {\n  100% {\n    background-size: 100% 100%;\n    background-image: radial-gradient(\n       rgb(0, 26, 255) 1%,\n    #bdf5ff 70%,\n    );\n  }\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,wBAAwB;AAC1B;AACA;EACE,SAAS;EACT,UAAU;EACV,YAAY;EACZ,yDAAsD;EACtD,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,SAAS;EACT,SAAS;AACX;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,YAAY;EACZ,aAAa;AACf;AACA;EACE,sCAAsC;AACxC;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,wCAAwC;AAC1C;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;AACR;AACA;EACE,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,uDAAuD;EACvD,eAAe;AACjB;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,OAAO;AACT;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,oBAAoB;AACtB;AACA;AACA;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,qBAAqB;EACrB,qBAAqB;AACvB;AACA;EACE,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,QAAQ;EACR,MAAM;EACN,OAAO;AACT;AACA;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ;;;;GAIC;EACD,0BAA0B;EAC1B,2BAA2B;EAC3B,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;AACZ;AACA;EACE;IACE,0BAA0B;IAC1B;;;KAGC;EACH;AACF",sourcesContent:[":root {\r\n  --backgroundColor: black;\r\n}\r\nhtml{\r\n  margin: 0;\r\n  padding: 0;\r\n  color: white;\r\n  background-image: url('./asset/background/night.avif');\r\n  background-size: cover;\r\n  height:100vh;\r\n}\r\nbody{\r\n  margin: 0;\r\n  padding:0;\r\n}\r\n::selection {\r\n  background-color: inherit;\r\n}\r\ndialog {\r\n  width: 300px;\r\n  height: 200px;\r\n}\r\ndialog::backdrop {\r\n  background-color: rgba(0, 0, 0, 0.486);\r\n}\r\n.notification {\r\n  padding-block: 20px;\r\n}\r\n.cancelButton {\r\n  border-radius: 20px;\r\n  background-color: rgba(0, 0, 255, 0.336);\r\n}\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.mainImage {\r\n  width: 700px;\r\n  padding-top: 60px;\r\n}\r\n.absoluteDescription {\r\n  position: absolute;\r\n  font-size: 2rem;\r\n  top: 0;\r\n}\r\n.middleside {\r\n  position: relative;\r\n}\r\n#inputMessage {\r\n  height: 3rem;\r\n  font-size: 2.5rem;\r\n}\r\n.clickButton {\r\n  height: 3rem;\r\n  border-radius: 1rem;\r\n  background-color: white;\r\n}\r\n.clickButton:hover {\r\n  background-color: rgba(180, 180, 180, 0.322) !important;\r\n  cursor: pointer;\r\n}\r\n.todayWeather {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n}\r\n.side {\r\n  flex: 1;\r\n}\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\nheader {\r\n  padding-inline: 40px;\r\n}\r\n.descriptionSection {\r\n}\r\n.after {\r\n  text-align: center;\r\n}\r\n.afterDescriptionContainer {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\nh3 {\r\n  white-space: pre-line;\r\n  padding-bottom: 100px;\r\n}\r\nfooter {\r\n  bottom: 0;\r\n  color: white;\r\n  background-color: black;\r\n  display: flex;\r\n  justify-content: center;\r\n  position: fixed;\r\n  bottom:0;\r\n  left:0;\r\n  right:0;\r\n}\r\n#loadingbackground {\r\n  position: fixed;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-image: radial-gradient(\r\n    rgb(0, 26, 255) 1%,\r\n    #bdf5ff 30%,\r\n    rgb(2, 40, 165) 70%\r\n  );\r\n  background-size: 300% 300%;\r\n  background-position: center;\r\n  animation: 2s linear 1 load;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 1;\r\n}\r\n@keyframes load {\r\n  100% {\r\n    background-size: 100% 100%;\r\n    background-image: radial-gradient(\r\n       rgb(0, 26, 255) 1%,\r\n    #bdf5ff 70%,\r\n    );\r\n  }\r\n}"],sourceRoot:""}]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(a[A]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var A=n[c],s=r.base?A[0]+r.base:A[0],l=i[s]||0,d="".concat(s," ").concat(l);i[s]=l+1;var u=t(d),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var f=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var A=r(n,o),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=A}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},681:(n,e,t)=>{n.exports=t.p+"91056a8d2389f6b3692a.avif"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"20c9ce2e51faf99f6cc8.jpg",e=t.p+"308541cba87570ab0719.jpg",r=t=>{const r=document.querySelector("html"),o=document.querySelector(".clickButton");t?(r.style.backgroundImage=`url(${e})`,o.setAttribute("style","background-color:black"),o.style.color="#FFFFFF"):(r.style.backgroundImage=`url(${n})`,o.setAttribute("style","background-color:white"),o.style.color="#000000")};async function o(n,e,t,r){e.src=`https://openweathermap.org/img/wn/${n.list[0].weather[0].icon}@2x.png`,t.textContent=`${r}`}async function i(n){let e;try{const i=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${n}&appid=2bc84a93a8c9b3dc7068adb352482bba&units=metric`,{mode:"cors"});e=await i.json(),console.log(e);const a=document.querySelector(".headLogo"),c=document.querySelector("h1");document.querySelector(".todayWeather").textContent=`오늘 ${e.city.name}의 날씨`,function(n){const e=document.querySelector(".humidity"),t=document.querySelector(".max"),r=document.querySelector(".min");e.textContent=`습도 : ${n.list[0].main.humidity}`,t.textContent=`최대 온도 : ${n.list[0].main.temp_max}`,r.textContent=`최소 온도 : ${n.list[0].main.temp_min}`}(e),Number(e.list[2].dt_txt.slice(11,13))>=6&&Number(e.list[2].dt_txt.slice(11,13))<=20?r(!1):r(!0),await o(e,a,c,e.list[0].weather[0].main),await(n=>{const e=document.querySelectorAll(".afterImage"),t=document.querySelectorAll("h2"),r=document.querySelectorAll("h3");Array.from(e).forEach(((i,a)=>{r[a].textContent=`${n.city.name} \r\n\n        습도 : ${n.list[a+3].main.humidity} \r\n\n        최대 온도 : ${n.list[a+3].main.temp_max} \r\n\n        최소 온도 : ${n.list[a+3].main.temp_min}`,o(n,e[a],t[a],n.list[a+3].dt_txt.slice(11,13))}))})(e),await(t=e.list[0].weather[0].description,void(document.querySelector(".absoluteDescription").textContent=t)),await async function(n){const e=document.querySelector(".mainImage"),t=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=soxaaxPuKt6EKETgCVcyjuBVv3E8Wt7H&q=${n}`,{mode:"cors"});let r;try{r=await t.json(),e.src=r.data[0].images.original.url}catch(n){throw new Error("날씨에 맞는 사진이 없습니다.")}}(e.list[0].weather[0].description)}catch(n){const e=document.querySelector(".notification"),t=document.querySelector("dialog");e.textContent="잘못된 장소입니다! 도시 이름만 입력해주셔야 해요..",t.showModal()}var t}var a=t(379),c=t.n(a),A=t(795),s=t.n(A),l=t(569),d=t.n(l),u=t(565),p=t.n(u),f=t(216),m=t.n(f),g=t(589),C=t.n(g),h=t(426),b={};b.styleTagTransform=C(),b.setAttributes=p(),b.insert=d().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=m(),c()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals,async function(){await i("Korea"),await void document.querySelector(".clickButton").addEventListener("click",(n=>{n.preventDefault();const e=document.querySelector("#inputMessage"),t=e.value;e.value="",i(t)})),document.querySelector("#loadingbackground").setAttribute("style","display:none")}()})()})();
//# sourceMappingURL=app.bundle.js.map