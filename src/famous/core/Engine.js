/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./Context","./EventHandler","./OptionsManager"],function(e,n,t){function i(){g.runLoop?(p.step(),window.requestAnimationFrame(i)):b=!1}function o(e){for(var n=0;n<f.length;n++)f[n].emit("resize");w.emit("resize")}function r(){window.addEventListener("touchmove",function(e){e.preventDefault()},!0),document.body.classList.add("famous-root"),document.documentElement.classList.add("famous-root")}var u,s,a=e("./Context"),c=e("./EventHandler"),d=e("./OptionsManager"),p={},f=[],m=[],l=[],v=Date.now(),b=!0,h={},w=new c,g={containerType:"div",containerClass:"famous-container",fpsCap:void 0,runLoop:!0,appMode:!0},C=new d(g);p.step=function(){var e=Date.now();if(!(s&&e-v<s)){var n=0;for(u=e-v,v=e,w.emit("prerender"),n=0;n<m.length;n++)m[n].call(this);for(m.splice(0);l.length&&Date.now()-e<10;)l.shift().call(this);for(n=0;n<f.length;n++)f[n].update();w.emit("postrender")}},window.requestAnimationFrame(i),window.addEventListener("resize",o,!1),o();p.pipe=function(e){return e.subscribe instanceof Function?e.subscribe(p):w.pipe(e)},p.unpipe=function(e){return e.unsubscribe instanceof Function?e.unsubscribe(p):w.unpipe(e)},p.on=function(e,n){return e in h||(h[e]=w.emit.bind(w,e),document.body?document.body.addEventListener(e,h[e]):p.nextTick(function(e,n){document.body.addEventListener(e,n)}.bind(this,e,h[e]))),w.on(e,n)},p.emit=function(e,n){return w.emit(e,n)},p.removeListener=function(e,n){return w.removeListener(e,n)},p.getFPS=function(){return 1e3/u},p.setFPSCap=function(e){s=Math.floor(1e3/e)},p.getOptions=function(){return C.getOptions.apply(C,arguments)},p.setOptions=function(e){return C.setOptions.apply(C,arguments)},p.createContext=function(e){g.appMode&&r();var n=!1;e||(e=document.createElement(g.containerType),e.classList.add(g.containerClass),n=!0);var t=new a(e);return p.registerContext(t),n&&p.nextTick(function(e,n){document.body.appendChild(n),e.emit("resize")}.bind(this,t,e)),t},p.registerContext=function(e){return f.push(e),e},p.getContexts=function(){return f},p.deregisterContext=function(e){var n=f.indexOf(e);n>=0&&f.splice(n,1)},p.nextTick=function(e){m.push(e)},p.defer=function(e){l.push(e)},C.on("change",function(e){"fpsCap"===e.id?p.setFPSCap(e.value):"runLoop"===e.id&&!b&&e.value&&(b=!0,window.requestAnimationFrame(i))}),t.exports=p});