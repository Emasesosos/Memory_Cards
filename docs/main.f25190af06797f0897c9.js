(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=5)})([function(a,b,c){var d=c(1),e=c(2);e=e.__esModule?e.default:e,'string'==typeof e&&(e=[[a.i,e,'']]);d(e,{insert:'head',singleton:!1});a.exports=e.locals||{}},function(a,b,c){'use strict';function d(a){for(var b=-1,c=0;c<m.length;c++)if(m[c].identifier===a){b=c;break}return b}function e(a,b){for(var c={},e=[],f=0;f<a.length;f++){var g=a[f],h=b.base?g[0]+b.base:g[0],i=c[h]||0,k=''.concat(h,' ').concat(i);c[h]=i+1;var l=d(k),n={css:g[1],media:g[2],sourceMap:g[3]};-1===l?m.push({identifier:k,updater:j(n,b),references:1}):(m[l].references++,m[l].updater(n)),e.push(k)}return e}function f(a){var b=document.createElement('style'),d=a.attributes||{};if('undefined'==typeof d.nonce){var e=c.nc;e&&(d.nonce=e)}if(Object.keys(d).forEach(function(a){b.setAttribute(a,d[a])}),'function'==typeof a.insert)a.insert(b);else{var f=l(a.insert||'head');if(!f)throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.');f.appendChild(b)}return b}function g(a){return null!==a.parentNode&&void a.parentNode.removeChild(a)}function h(a,b,c,d){var e=c?'':d.media?'@media '.concat(d.media,' {').concat(d.css,'}'):d.css;if(a.styleSheet)a.styleSheet.cssText=n(b,e);else{var f=document.createTextNode(e),g=a.childNodes;g[b]&&a.removeChild(g[b]),g.length?a.insertBefore(f,g[b]):a.appendChild(f)}}function i(a,b,c){var d=c.css,e=c.media,f=c.sourceMap;if(e?a.setAttribute('media',e):a.removeAttribute('media'),f&&btoa&&(d+='\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(f)))),' */')),a.styleSheet)a.styleSheet.cssText=d;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(d))}}function j(a,b){var c,d,e;if(b.singleton){var j=p++;c=o||(o=f(b)),d=h.bind(null,c,j,!1),e=h.bind(null,c,j,!0)}else c=f(b),d=i.bind(null,c,b),e=function(){g(c)};return d(a),function(b){if(b){if(b.css===a.css&&b.media===a.media&&b.sourceMap===a.sourceMap)return;d(a=b)}else e()}}var k=function(){var a;return function(){return'undefined'==typeof a&&(a=!!(window&&document&&document.all&&!window.atob)),a}}(),l=function(){var a={};return function(b){if('undefined'==typeof a[b]){var c=document.querySelector(b);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement)try{c=c.contentDocument.head}catch(a){c=null}a[b]=c}return a[b]}}(),m=[],n=function(){var a=[];return function(b,c){return a[b]=c,a.filter(Boolean).join('\n')}}(),o=null,p=0;a.exports=function(a,b){b=b||{},b.singleton||'boolean'==typeof b.singleton||(b.singleton=k()),a=a||[];var c=e(a,b);return function(a){if(a=a||[],'[object Array]'===Object.prototype.toString.call(a)){for(var f=0;f<c.length;f++){var g=c[f],h=d(g);m[h].references--}for(var i=e(a,b),j=0;j<c.length;j++){var k=c[j],l=d(k);0===m[l].references&&(m[l].updater(),m.splice(l,1))}c=i}}}},function(a,b,c){var d=c(3);b=d(!1),b.push([a.i,'@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);']),b.push([a.i,'body {\n  font-family: \'Lato\', sans-serif;\n  background-color: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  overflow: hidden;\n}\n\nbutton {\n  cursor: pointer;\n  outline: none;\n}\n\nh1 {\n  position: relative;\n}\n\nh1 button {\n  position: absolute;\n  right: 0;\n  transform: translate(120%, -50%);\n}\n\n.btn {\n  background-color: #FFFFFF;\n  border: 1px solid #AAAAAA;\n  border-radius: 3px;\n  font-size: 14px;\n  margin-top: 20px;\n  padding: 10px 15px;\n}\n\n.btn.ad:active {\n  transform: scale(0.98);\n}\n\n.btn:hover {\n  border: 1px solid darkseagreen;\n}\n\n.btn.btn-small {\n  font-size: 12px;\n  padding: 5px 10px;\n}\n\n.btn.btn-ghost {\n  border: 0;\n  background-color: transparent;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  transition: background-color 0.5s ease;\n}\n\n.btn.btn-ghost:hover {\n  background-color: darkgray;\n}\n\n.btn.btn-ghost i {\n  font-size: 13px;\n}\n\n.btn.clear {\n  position: absolute;\n  bottom: 30px;\n  left: 30px;\n}\n\n.cards {\n  perspective: 1000px;\n  position: relative;\n  height: 300px;\n  width: 500px;\n  max-width: 100%;\n}\n\n.cards .card {\n  position: absolute;\n  opacity: 0;\n  font-size: 1.5em;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  transform: translateX(50%) rotateY(-10deg);\n  transition: transform 0.4s ease, opacity 0.4s ease;\n}\n\n.cards .card.active {\n  cursor: pointer;\n  opacity: 1;\n  z-index: 10;\n  transform: translateX(0) rotateY(0deg);\n}\n\n.cards .card.left {\n  transform: translateX(-50%) rotateY(10deg);\n}\n\n.cards .card.show-answer .inner-card {\n  transform: rotateX(180deg);\n}\n\n.cards .card .inner-card {\n  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  height: 100%;\n  width: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 0.4s ease;\n}\n\n.cards .card .inner-card .inner-card-front,\n.cards .card .inner-card .inner-card-back {\n  backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  background: #FFFFFF;\n}\n\n.inner-card-front {\n  transform: rotateX(0deg);\n  z-index: 2;\n}\n\n.inner-card-back {\n  transform: rotateX(180deg);\n}\n\n.inner-card-front::after,\n.inner-card-back::after {\n  content: \'\\f021  Flip\';\n  font-family: \'Font Awesome 5 Free\', Roboto, sans-serif;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-weight: bold;\n  font-size: 16px;\n  color: #DDDDDD;\n}\n\n.navigation {\n  display: flex;\n  margin: 20px 0;\n}\n\n.navigation .nav-button {\n  border: none;\n  background-color: transparent;\n  font-size: 16px;\n}\n\n.navigation p {\n  margin: 0 25px;\n}\n\n.add-container {\n  opacity: 0;\n  z-index: -1;\n  background-color: #F0F0F0;\n  border-top: 2px solid #EEEEEE;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 0;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  transition: 0.3s ease;\n}\n\n.add-container.show {\n  opacity: 1;\n  z-index: 2;\n}\n\n.add-container h3 {\n  margin: 10px 0;\n}\n\n.add-container .form-group label {\n  display: block;\n  margin: 20px 0 10px;\n}\n\n.add-container .form-group textarea {\n  border: 1px solid #AAAAAA;\n  border-radius: 3px;\n  font-size: 16px;\n  padding: 12px;\n  min-width: 500px;\n  max-width: 100%;\n  outline: none;\n}\n\n.add-container .form-group textarea:focus {\n  border: 1px solid darkseagreen;\n}\n','']),a.exports=b},function(a){'use strict';function b(a,b){var d=a[1]||'',e=a[3];if(!e)return d;if(b&&'function'==typeof btoa){var f=c(e),g=e.sources.map(function(a){return'/*# sourceURL='.concat(e.sourceRoot||'').concat(a,' */')});return[d].concat(g).concat([f]).join('\n')}return[d].join('\n')}function c(a){var b=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c='sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(b);return'/*# '.concat(c,' */')}a.exports=function(a){var c=[];return c.toString=function(){return this.map(function(c){var d=b(c,a);return c[2]?'@media '.concat(c[2],' {').concat(d,'}'):d}).join('')},c.i=function(a,b,d){'string'==typeof a&&(a=[[null,a,'']]);var e={};if(d)for(var f,g=0;g<this.length;g++)f=this[g][0],null!=f&&(e[f]=!0);for(var h,i=0;i<a.length;i++)(h=[].concat(a[i]),!(d&&e[h[0]]))&&(b&&(h[2]?h[2]=''.concat(b,' and ').concat(h[2]):h[2]=b),c.push(h))},c}},function(){},function(a,b,c){'use strict';c.r(b);var d=c(0),e=document.getElementById('cards-container'),f=document.getElementById('prev'),g=document.getElementById('next'),h=document.getElementById('current'),i=document.getElementById('show'),j=document.getElementById('hide'),k=document.getElementById('question'),l=document.getElementById('answer'),m=document.getElementById('add-card'),n=document.getElementById('clear'),o=document.getElementById('add-container'),p=0,q=[],r=function(b){localStorage.setItem('cards',JSON.stringify(b)),window.location.reload()},s=function(){var b=JSON.parse(localStorage.getItem('cards'));return null===b?[]:b}(),t=function(){s.forEach(function(c,a){u(c,a)})},u=function(d,a){var b=document.createElement('div');b.classList.add('card'),0===a&&b.classList.add('active'),b.innerHTML='\n        <div class="inner-card">\n            <div class="inner-card-front">\n                <p>\n                    '.concat(d.question,'\n                </p>\n            </div>\n            <div class="inner-card-back">\n                <p>\n                    ').concat(d.answer,'\n                </p>\n            </div>\n        </div>\n    '),b.addEventListener('click',function(){b.classList.toggle('show-answer')}),q.push(b),console.log(q),e.appendChild(b),v()},v=function(){h.innerText=''.concat(p+1,'/').concat(q.length)},w=function(){g.addEventListener('click',function(){0<q.length&&(q[p].className='card left',++p,p>q.length-1&&(p=q.length-1),q[p].className='card active',v())}),f.addEventListener('click',function(){0<q.length&&(q[p].className='card right',--p,0>p&&(p=0),q[p].className='card active',v())}),i.addEventListener('click',function(){o.classList.add('show')}),j.addEventListener('click',function(){o.classList.remove('show')}),m.addEventListener('click',function(){var d=k.value,e=l.value;if(d.trim()&&e.trim()){var f={question:d,answer:e};u(f),k.value='',l.value='',o.classList.remove('show'),s.push(f),r(s)}}),n.addEventListener('click',function(){localStorage.clear(),e.innerHTML='',window.location.reload()})},x=c(4);(function(){console.log('Memory Cards'),t(),w()})()}]);