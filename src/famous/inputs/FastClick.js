/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module"],function(e,n,t){if(window.CustomEvent){var i={},o={},d=Date.now;window.addEventListener("touchstart",function(e){for(var n=d(),t=0;t<e.changedTouches.length;t++){var o=e.changedTouches[t];i[o.identifier]=n}}),window.addEventListener("touchmove",function(e){for(var n=0;n<e.changedTouches.length;n++){var t=e.changedTouches[n];delete i[t.identifier]}}),window.addEventListener("touchend",function(e){for(var n=d(),t=0;t<e.changedTouches.length;t++){var a=e.changedTouches[t],r=i[a.identifier];if(r&&n-r<300){var c=new window.CustomEvent("click",{bubbles:!0,detail:a});o[n]=e,e.target.dispatchEvent(c)}delete i[a.identifier]}}),window.addEventListener("click",function(e){var n=d();for(var t in o){var i=o[t];n-t<500?e instanceof window.MouseEvent&&e.target===i.target&&e.stopPropagation():delete o[t]}},!0)}});