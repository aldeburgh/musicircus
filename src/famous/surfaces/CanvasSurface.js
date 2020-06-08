/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/Surface"],function(t,e,i){function s(t){t&&t.canvasSize&&(this._canvasSize=t.canvasSize),a.apply(this,arguments),this._canvasSize||(this._canvasSize=this.getSize()),this._backBuffer=document.createElement("canvas"),this._canvasSize&&(this._backBuffer.width=this._canvasSize[0],this._backBuffer.height=this._canvasSize[1]),this._contextId=void 0}var a=t("famous/core/Surface");s.prototype=Object.create(a.prototype),s.prototype.constructor=s,s.prototype.elementType="canvas",s.prototype.elementClass="famous-surface",s.prototype.setContent=function(){},s.prototype.deploy=function(t){this._canvasSize&&(t.width=this._canvasSize[0],t.height=this._canvasSize[1]),"2d"===this._contextId&&(t.getContext(this._contextId).drawImage(this._backBuffer,0,0),this._backBuffer.width=0,this._backBuffer.height=0)},s.prototype.recall=function(t){this.getSize();this._backBuffer.width=t.width,this._backBuffer.height=t.height,"2d"===this._contextId&&(this._backBuffer.getContext(this._contextId).drawImage(t,0,0),t.width=0,t.height=0)},s.prototype.getContext=function(t){return this._contextId=t,this._currTarget?this._currTarget.getContext(t):this._backBuffer.getContext(t)},s.prototype.setSize=function(t,e){a.prototype.setSize.apply(this,arguments),e&&(this._canvasSize=[e[0],e[1]]),this._currTarget&&(this._currTarget.width=this._canvasSize[0],this._currTarget.height=this._canvasSize[1])},i.exports=s});