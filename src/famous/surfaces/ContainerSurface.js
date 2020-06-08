/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/Surface","famous/core/Context"],function(t,e,o){function i(t){s.call(this,t),this._container=document.createElement("div"),this._container.classList.add("famous-group"),this._container.classList.add("famous-container-group"),this._shouldRecalculateSize=!1,this.context=new r(this._container),this.setContent(this._container)}var s=t("famous/core/Surface"),r=t("famous/core/Context");i.prototype=Object.create(s.prototype),i.prototype.constructor=i,i.prototype.elementType="div",i.prototype.elementClass="famous-surface",i.prototype.add=function(){return this.context.add.apply(this.context,arguments)},i.prototype.render=function(){return this._sizeDirty&&(this._shouldRecalculateSize=!0),s.prototype.render.apply(this,arguments)},i.prototype.deploy=function(){return this._shouldRecalculateSize=!0,s.prototype.deploy.apply(this,arguments)},i.prototype.commit=function(t,e,o,i,r){var n=this._size?[this._size[0],this._size[1]]:null,c=s.prototype.commit.apply(this,arguments);return(this._shouldRecalculateSize||n&&(this._size[0]!==n[0]||this._size[1]!==n[1]))&&(this.context.setSize(),this._shouldRecalculateSize=!1),this.context.update(),c},o.exports=i});