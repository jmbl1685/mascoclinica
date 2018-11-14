function polyfill(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var i,n=t.HTMLElement||t.Element,o=468,s={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:n.prototype.scroll||a,scrollIntoView:n.prototype.scrollIntoView},r=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,l=(i=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(i)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==h(arguments[0])?m.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):s.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(h(arguments[0])?s.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==h(arguments[0])){var t=arguments[0].left,e=arguments[0].top;m.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");s.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==h(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):s.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==h(arguments[0])){var i=function(t){var i;do{i=(t=t.parentNode)===e.body}while(!1===i&&!1===f(t));return i=null,t}(this),n=i.getBoundingClientRect(),o=this.getBoundingClientRect();i!==e.body?(m.call(this,i,i.scrollLeft+o.left-n.left,i.scrollTop+o.top-n.top),"fixed"!==t.getComputedStyle(i).position&&t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else s.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function a(t,e){this.scrollLeft=t,this.scrollTop=e}function h(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(t,e){return"Y"===e?t.clientHeight+l<t.scrollHeight:"X"===e?t.clientWidth+l<t.scrollWidth:void 0}function u(e,i){var n=t.getComputedStyle(e,null)["overflow"+i];return"auto"===n||"scroll"===n}function f(t){var e=c(t,"Y")&&u(t,"Y"),i=c(t,"X")&&u(t,"X");return e||i}function d(e){var i,n,s,l,a=(r()-e.startTime)/o;l=a=a>1?1:a,i=.5*(1-Math.cos(Math.PI*l)),e.method.call(e.scrollable,n=e.startX+(e.x-e.startX)*i,s=e.startY+(e.y-e.startY)*i),n===e.x&&s===e.y||t.requestAnimationFrame(d.bind(t,e))}function m(i,n,o){var l,h,c,u,f=r();i===e.body?(l=t,h=t.scrollX||t.pageXOffset,c=t.scrollY||t.pageYOffset,u=s.scroll):(l=i,h=i.scrollLeft,c=i.scrollTop,u=a),d({scrollable:l,method:u,startTime:f,startX:h,startY:c,x:n,y:o})}}!function t(e,i,n){function o(r,l){if(!i[r]){if(!e[r]){var a="function"==typeof require&&require;if(!l&&a)return a(r,!0);if(s)return s(r,!0);var h=new Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}var c=i[r]={exports:{}};e[r][0].call(c.exports,function(t){return o(e[r][1][t]||t)},c,c.exports,t,e,i,n)}return i[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,i){!function(i,n){"use strict";"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(t,e){return n(i,t,e)}):"object"==typeof e&&e.exports?e.exports=n(i,t("wolfy87-eventemitter"),t("eventie")):i.imagesLoaded=n(i,i.EventEmitter,i.eventie)}(window,function(t,e,i){"use strict";function n(t,e){for(var i in e)t[i]=e[i];return t}function o(t,e,i){if(!(this instanceof o))return new o(t,e,i);"string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=function(t){var e=[];if(function(t){return"[object Array]"==h.call(t)}(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}(t),this.options=n({},this.options),"function"==typeof e?i=e:n(this.options,e),i&&this.on("always",i),this.getImages(),l&&(this.jqDeferred=new l.Deferred);var s=this;setTimeout(function(){s.check()})}function s(t){this.img=t}function r(t,e){this.url=t,this.element=e,this.img=new Image}var l=t.jQuery,a=t.console,h=Object.prototype.toString;(o.prototype=new e).options={},o.prototype.getImages=function(){this.images=[];for(var t=0;t<this.elements.length;t++)this.addElementImages(this.elements[t])},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&c[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++)this.addImage(i[n]);if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++)this.addElementBackgroundImages(o[n])}}};var c={1:!0,9:!0,11:!0};o.prototype.addElementBackgroundImages=function(t){for(var e=u(t),i=/url\(['"]*([^'"\)]+)['"]*\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[1];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}};var u=t.getComputedStyle||function(t){return t.currentStyle};return o.prototype.addImage=function(t){var e=new s(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new r(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;if(this.progressedCount=0,this.hasAnyBroken=!1,this.images.length)for(var i=0;i<this.images.length;i++){var n=this.images[i];n.once("progress",t),n.check()}else this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emit("progress",this,t,e),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";this.isComplete=!0,this.emit(t,this),this.emit("always",this),this.jqDeferred&&this.jqDeferred[this.hasAnyBroken?"reject":"resolve"](this)},(s.prototype=new e).check=function(){return this.getIsImageComplete()?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,i.bind(this.proxyImage,"load",this),i.bind(this.proxyImage,"error",this),i.bind(this.img,"load",this),i.bind(this.img,"error",this),void(this.proxyImage.src=this.img.src))},s.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emit("progress",this,this.img,e)},s.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},s.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},s.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},s.prototype.unbindEvents=function(){i.unbind(this.proxyImage,"load",this),i.unbind(this.proxyImage,"error",this),i.unbind(this.img,"load",this),i.unbind(this.img,"error",this)},(r.prototype=new s).check=function(){i.bind(this.img,"load",this),i.bind(this.img,"error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},r.prototype.unbindEvents=function(){i.unbind(this.img,"load",this),i.unbind(this.img,"error",this)},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emit("progress",this,this.element,e)},o.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((l=e).fn.imagesLoaded=function(t,e){return new o(this,t,e).jqDeferred.promise(l(this))})},o.makeJQueryPlugin(),o})},{eventie:2,"wolfy87-eventemitter":3}],2:[function(t,e,i){!function(t){"use strict";function n(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var o=document.documentElement,s=function(){};o.addEventListener?s=function(t,e,i){t.addEventListener(e,i,!1)}:o.attachEvent&&(s=function(t,e,i){t[e+i]=i.handleEvent?function(){var e=n(t);i.handleEvent.call(i,e)}:function(){var e=n(t);i.call(t,e)},t.attachEvent("on"+e,t[e+i])});var r=function(){};o.removeEventListener?r=function(t,e,i){t.removeEventListener(e,i,!1)}:o.detachEvent&&(r=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}});var l={bind:s,unbind:r};"function"==typeof define&&define.amd?define(l):"object"==typeof i?e.exports=l:t.eventie=l}(window)},{}],3:[function(t,e,i){(function(){"use strict";function t(){}function i(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function n(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,s=this,r=s.EventEmitter;o.getListeners=function(t){var e,i,n=this._getEvents();if(t instanceof RegExp)for(i in e={},n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i]);else e=n[t]||(n[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;e<t.length;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&((e={})[t]=i),e||i},o.addListener=function(t,e){var n,o=this.getListenersAsObject(t),s="object"==typeof e;for(n in o)o.hasOwnProperty(n)&&-1===i(o[n],e)&&o[n].push(s?e:{listener:e,once:!1});return this},o.on=n("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=n("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,e){var n,o,s=this.getListenersAsObject(t);for(o in s)s.hasOwnProperty(o)&&-1!==(n=i(s[o],e))&&s[o].splice(n,1);return this},o.off=n("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var n,o,s=t?this.removeListener:this.addListener,r=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)s.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?s.call(this,n,o):r.call(this,n,o));return this},o.removeEvent=function(t){var e,i=typeof t,n=this._getEvents();if("string"===i)delete n[t];else if(t instanceof RegExp)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},o.removeAllListeners=n("removeEvent"),o.emitEvent=function(t,e){var i,n,o,s,r=this.getListenersAsObject(t);for(s in r)if(r.hasOwnProperty(s))for(o=(i=r[s].slice(0)).length;o--;)!0===(n=i[o]).once&&this.removeListener(t,n.listener),n.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,n.listener);return this},o.trigger=n("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return s.EventEmitter=r,t},"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof e&&e.exports?e.exports=t:s.EventEmitter=t}).call(this)},{}],4:[function(t,e,i){!function(t,n){"object"==typeof i?e.exports=n():t.CreateControls=n()}(this,function(){"use strict";function t(t,e,i){var n=document.createElement(t);return e&&"object"==typeof e?e.forEach(function(t){n.classList.add(t)}):n.classList.add(e),n}var e={init:function(){for(var e=t("div","m-p-g__controls"),i=t("button","m-p-g__controls-close"),n=t("button",["m-p-g__controls-arrow","m-p-g__controls-arrow--next"]),o=t("button",["m-p-g__controls-arrow","m-p-g__controls-arrow--prev"]),s=[i,n,o],r=0;r<s.length;r++)e.appendChild(s[r]);var l=t("span","m-p-g__btn"),a=t("span","m-p-g__btn"),h=t("span","m-p-g__btn");return l.innerHTML='<svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',a.innerHTML='<svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>',h.innerHTML='<svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>',i.appendChild(l),n.appendChild(a),o.appendChild(h),e}};return e})},{}],5:[function(t,e,i){var n=t("./material-photo-gallery");window.MaterialPhotoGallery=n},{"./material-photo-gallery":6}],6:[function(t,e,i){var n;n=function(t,e,i){"use strict";function n(t,e,i){var n;return function(){var o=this,s=arguments,r=i&&!n;clearTimeout(n),n=setTimeout(function(){n=null,i||t.apply(o,s)},e),r&&t.apply(o,s)}}var o=function(t){this._element=t,this._layout()},s=!1,r="transform",l="Webkit Moz ms".split(" ");if(void 0!==(u=document.createElement("div")).style.transform&&(s=!0),!1===s)for(var a=0;a<l.length;a++)if(void 0!==u.style[l[a]+"Transform"]){r=l[a]+"Transform",s=!0;break}var h,c={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},u=document.createElement("div");for(var f in c)if(void 0!==u.style[f]){h=c[f];break}return o.prototype._cssClasses={GALLERY:"m-p-g",THUMBS_BOX:"m-p-g__thumbs",THUMB_IMG:"m-p-g__thumbs-img",FULL_BOX:"m-p-g__fullscreen",FULL_IMG:"m-p-g__fullscreen-img",CONTROLS:"m-p-g__controls",CONTROLS_CLOSE:"m-p-g__controls-close",CONTROLS_NEXT:"m-p-g__controls-arrow--next",CONTROLS_PREV:"m-p-g__controls-arrow--prev"},o.prototype._layout=function(){var i=this,o=t(document.querySelector("div[data-google-image-layout]"));o.on("progress",function(t,e){e.img.setAttribute("data-width",e.img.offsetWidth),e.img.setAttribute("data-height",e.img.offsetHeight)}),o.on("done",function(t){(new e).init({after:function(){i.init()}})}),o.on("fail",function(t){var e=i._element,n=document.createElement("div");n.className="m-p-g__alertBox";var o=document.createElement("h2");o.innerHTML="Error";var s=document.createElement("p");n.appendChild(o),n.appendChild(s),e.appendChild(n);var r=[];t.images.forEach(function(t){t.isLoaded||r.push(t.img.currentSrc)}),s.innerHTML="Failed to load: "+r}),window.onresize=n(function(){(new e).init({after:function(){setTimeout(function(){i._handleResize()},500)}})},25)},o.prototype.init=function(){var t=i.init();this._element.appendChild(t),this._gallery=this._element,this._thumbsBox=this._gallery.querySelector("."+this._cssClasses.THUMBS_BOX),this._thumbsNodeList=this._thumbsBox.querySelectorAll("."+this._cssClasses.THUMB_IMG),this._thumbs=Array.prototype.slice.call(this._thumbsNodeList),this._fullBox=this._gallery.querySelector("."+this._cssClasses.FULL_BOX),this._controls=this._gallery.querySelector("."+this._cssClasses.CONTROLS),this._closeBtn=this._controls.querySelector("."+this._cssClasses.CONTROLS_CLOSE),this._prevBtn=this._controls.querySelector("."+this._cssClasses.CONTROLS_PREV),this._nextBtn=this._controls.querySelector("."+this._cssClasses.CONTROLS_NEXT),this._fullImgsLoaded=!1,this._fullImgOpen=!1,this._bindEvents.call(this),this._loadFullImgs.call(this)},o.prototype._bindEvents=function(){for(var t=0,e=this._thumbs.length;e>t;t++)this._thumbs[t].addEventListener("click",this._handleThumbClick.bind(this)),this._thumbs[t].addEventListener("mouseover",this._handleThumbHover.bind(this));this._closeBtn.addEventListener("click",this._handleClose.bind(this)),this._nextBtn.addEventListener("click",this._handleNext.bind(this)),this._prevBtn.addEventListener("click",this._handlePrev.bind(this)),window.addEventListener("scroll",this._handleScroll.bind(this))},o.prototype._handleScroll=n(function(){this._resetFullImg.call(this)},25),o.prototype._handleResize=function(){this._resetFullImg.call(this)},o.prototype._loadFullImgs=function(){for(var t,e,i=0,n=this._thumbs.length;n>i;i++)t=this._thumbs[i].getAttribute("data-full"),(e=new Image).src=t,e.classList.add(this._cssClasses.FULL_IMG),this._fullBox.appendChild(e);this._loadFullImgsDone.call(this)},o.prototype._loadFullImgsDone=function(){t(this._fullBox).on("done",(function(t){var e=t.images;this._fullImgs=[],this._fullImgDimensions=[],this._fullImgsTransforms=[];for(var i=0,n=e.length;n>i;i++){var o=e[i].img.getBoundingClientRect();this._fullImgs.push(e[i].img),this._positionFullImgs.call(this,e[i].img,i),this._fullImgDimensions.push(o)}this._fullImgsLoaded=!0}).bind(this))},o.prototype._positionFullImgs=function(t,e,i){var n=this._transformFullImg(t,this._thumbs[e]);this._fullImgsTransforms.push(n),t.style.marginTop=-t.height/2+"px",t.style.marginLeft=-t.width/2+"px",!1!==i&&(t.style[r]=n)},o.prototype._transformFullImg=function(t,e,i){var n,o,s,r;return t=t.getBoundingClientRect(),e=e.getBoundingClientRect(),i?(n=(e.width/i.width).toFixed(3),o=(e.height/i.height).toFixed(3),s=e.left-i.left+i.width/2,r=e.top-i.top+i.height/2):(n=(e.width/t.width).toFixed(3),o=(e.height/t.height).toFixed(3),s=e.left-t.left+t.width/2,r=e.top-t.top+t.height/2),"translate("+s+"px,"+r+"px) scale("+n+","+o+")"},o.prototype._resetFullImg=function(){this._fullImgsTransforms=[];for(var t=0,e=this._fullImgs.length;e>t;t++)t===this._thumbIndex&&this._fullImgOpen?(this._fullImgs[t].removeAttribute("style"),this._positionFullImgs.call(this,this._fullImgs[t],t,!1)):(this._fullImgs[t].removeAttribute("style"),this._positionFullImgs.call(this,this._fullImgs[t],t))},o.prototype._handleThumbHover=function(t){this._fullImgsLoaded&&!this._fullImgOpen&&this._transformThumbSetup.call(this,t)},o.prototype._handleThumbClick=function(t){this._thumb!=t.target&&(this._thumb=t.target,this._thumbIndex=this._thumbs.indexOf(this._thumb),this._fullImg=this._fullImgs[this._thumbIndex]),this._setupComplete&&this._fullImgsLoaded&&!this._fullImgOpen&&(this._activateFullImg.call(this),this._activateControls.call(this),this._activateFullBox.call(this),this._disableScroll())},o.prototype._transformThumbSetup=function(t,e){this._setupComplete=!1,this._thumb=t.target,this._thumbIndex=this._thumbs.indexOf(this._thumb),this._fullImg=this._fullImgs[this._thumbIndex],this._setupComplete=!0,e&&e()},o.prototype._activateFullImg=function(){this._thumb.classList.add("hide"),this._fullImg.classList.add("active"),this._fullImg.style[r]="translate3d(0,0,0)",this._fullImgOpen=!0,this._fullImgs.forEach(function(t){t.classList.contains("active")||t.classList.add("almost-active")})},o.prototype._activateFullBox=function(){this._fullBox.classList.add("active")},o.prototype._activateControls=function(){this._controls.classList.add("active")},o.prototype._handleClose=function(){this._fullImgOpen&&this._closeFullImg.call(this)},o.prototype._closeFullImg=function(){var t=(function(){this._fullBox.classList.remove("active"),this._controls.classList.remove("active"),this._fullImg.style[r]=this._fullImgsTransforms[this._thumbIndex],this._thumb.classList.remove("hide"),this._fullImgs.forEach(function(t){t.classList.remove("almost-active")});var t=(function(){this._fullImg.classList.remove("active"),this._fullImg.removeEventListener(h,t),this._fullImgOpen=!1}).bind(this);this._fullImg.addEventListener(h,t),this._enableScroll()}).bind(this);window.requestAnimationFrame(t)},o.prototype._handleNext=function(){this._fullImgOpen&&this._changeImg.call(this,"next")},o.prototype._handlePrev=function(){this._fullImgOpen&&this._changeImg.call(this,"prev")},o.prototype._changeImg=function(t){this._thumbIndex=this._fullImgs.indexOf(this._fullImg),"next"===t?this._thumbIndex+=1:this._thumbIndex-=1,this._newFullImg="next"===t?this._fullImg.nextElementSibling:this._fullImg.previousElementSibling,this._newFullImg&&"IMG"===this._newFullImg.nodeName||(this._newFullImg=this._newFullImg="next"===t?this._fullImgs[0]:this._fullImgs[this._fullImgs.length-1],this._thumbIndex="next"===t?0:this._fullImgs.length-1),this._newFullImg.style[r]="translate3d(0,0,0)",this._fullImg.classList.remove("active"),this._fullImg.style[r]=this._fullImgsTransforms[this._thumbIndex-1],this._fullImg=this._newFullImg,this._fullImg.classList.add("active")},o.prototype._disableScroll=function(){function t(t){(t=t||window.event).preventDefault&&t.preventDefault(),t.returnValue=!1}window.onwheel=t,window.ontouchmove=t},o.prototype._enableScroll=function(){window.onwheel=null,window.ontouchmove=null},o},"function"==typeof define&&define.amd?define(n):"object"==typeof i?e.exports=n(t("imagesLoaded"),t("./vendor/google-image-layout"),t("./create-controls")):this.Gallery=n(window.imagesLoaded,window.GoogleImageLayout)},{"./create-controls":4,"./vendor/google-image-layout":7,imagesLoaded:1}],7:[function(t,e,i){!function(t,n){"function"==typeof define&&define.amd?define(function(){return n()}):"object"==typeof i?e.exports=n:t.GoogleImageLayout=n()}(this,function(t){"use strict";var e={},i=[],n=function(t,e,i){for(var n,o=0,s=0;s<t.length;s++)n=t[s],o+=parseInt(n.getAttribute("data-width"))/parseInt(n.getAttribute("data-height"));return e/o},o=function(t,e){i.push(e);for(var n,o=0;o<t.length;o++)(n=t[o]).style.width=e*parseInt(n.getAttribute("data-width"))/parseInt(n.getAttribute("data-height"))+"px",n.style.height=e+"px",n.classList.add("layout-completed")};return e.init=function(t){t=t||{};for(var i=document.querySelectorAll("div[data-google-image-layout]"),n=i.length,o=0;n>o;o++)e.align(i[o]);t.after&&t.after()},e.align=function(t){var e=t.clientWidth,i=parseInt(t.getAttribute("data-max-height")||120),s=function(t){return[].map.call(t,function(t){return t})}(t.querySelectorAll("img"));t:for(;s.length>0;){for(var r=1;r<=s.length;r++){var l=s.slice(0,r),a=n(l,e);if(i>a){o(l,a),s=s.slice(r);continue t}}o(l,Math.min(i,a));break}},e})},{}]},{},[5]),"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:polyfill}:polyfill();let showMenu=!1,init=!0;function MaterialPhotoGalleryHandle(){if(init){let t=document.querySelector(".m-p-g");new MaterialPhotoGallery(t),Array.from(t.getElementsByTagName("img")).map((t,e)=>{t.setAttribute("data-full",t.src)}),init=!1}}function ScrollAnimation(t){const e=t.srcElement.id;t.preventDefault(),document.querySelector(`.${e}`).scrollIntoView({behavior:"smooth"}),document.querySelector(".m-p-g__controls-close").click()}function ScrollUp(){window.scroll({top:0,left:0,behavior:"smooth"})}function DisplayStyleValue(t,e){let i=document.body.scrollTop,n=document.documentElement.scrollTop;e.style.display=i>t||n>t?"block":"none"}function toggleMenu(){let t=document.getElementById("navbar");const e=document.querySelector(".menu-btn");showMenu?(t.classList.remove("fadeInRight"),t.classList.add("fadeOutRight"),e.classList.remove("close"),showMenu=!1):(t.style.display="block",t.classList.remove("fadeOutRight"),t.classList.add("fadeInRight"),e.classList.add("close"),showMenu=!0)}window.onscroll=(()=>{DisplayStyleValue(680,document.getElementById("btn-up"))});