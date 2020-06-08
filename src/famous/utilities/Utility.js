/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module"],function(e,n,t){var r={};r.Direction={X:0,Y:1,Z:2},r.after=function(e,n){var t=e;return function(){0===--t&&n.apply(this,arguments)}},r.loadURL=function(e,n){var t=new XMLHttpRequest;t.onreadystatechange=function(){4===this.readyState&&n&&n(this.responseText)},t.open("GET",e),t.send()},r.createDocumentFragmentFromHTML=function(e){var n=document.createElement("div");n.innerHTML=e;for(var t=document.createDocumentFragment();n.hasChildNodes();)t.appendChild(n.firstChild);return t},r.clone=function(e){var n;if("object"==typeof e){n={};for(var t in e)if("object"==typeof e[t]&&null!==e[t])if(e[t]instanceof Array){n[t]=new Array(e[t].length);for(var o=0;o<e[t].length;o++)n[t][o]=r.clone(e[t][o])}else n[t]=r.clone(e[t]);else n[t]=e[t]}else n=e;return n},t.exports=r});