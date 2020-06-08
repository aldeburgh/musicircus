/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/Surface"],function(t,e,r){function o(t){this._placeholder=t.placeholder||"",this._value=t.value||"",this._type=t.type||"text",this._name=t.name||"",i.apply(this,arguments),this.on("click",this.focus.bind(this)),window.addEventListener("click",function(t){t.target!==this._currTarget&&this.blur()}.bind(this))}var i=t("famous/core/Surface");o.prototype=Object.create(i.prototype),o.prototype.constructor=o,o.prototype.elementType="input",o.prototype.elementClass="famous-surface",o.prototype.setPlaceholder=function(t){return this._placeholder=t,this._contentDirty=!0,this},o.prototype.focus=function(){return this._currTarget&&this._currTarget.focus(),this},o.prototype.blur=function(){return this._currTarget&&this._currTarget.blur(),this},o.prototype.setValue=function(t){return this._value=t,this._contentDirty=!0,this},o.prototype.setType=function(t){return this._type=t,this._contentDirty=!0,this},o.prototype.getValue=function(){return this._currTarget?this._currTarget.value:this._value},o.prototype.setName=function(t){return this._name=t,this._contentDirty=!0,this},o.prototype.getName=function(){return this._name},o.prototype.deploy=function(t){""!==this._placeholder&&(t.placeholder=this._placeholder),t.value=this._value,t.type=this._type,t.name=this._name},r.exports=o});