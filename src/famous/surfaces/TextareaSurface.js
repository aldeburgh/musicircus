/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/Surface"],function(t,e,r){function o(t){this._placeholder=t.placeholder||"",this._value=t.value||"",this._name=t.name||"",this._wrap=t.wrap||"",this._cols=t.cols||"",this._rows=t.rows||"",s.apply(this,arguments),this.on("click",this.focus.bind(this))}var s=t("famous/core/Surface");o.prototype=Object.create(s.prototype),o.prototype.constructor=o,o.prototype.elementType="textarea",o.prototype.elementClass="famous-surface",o.prototype.setPlaceholder=function(t){return this._placeholder=t,this._contentDirty=!0,this},o.prototype.focus=function(){return this._currTarget&&this._currTarget.focus(),this},o.prototype.blur=function(){return this._currTarget&&this._currTarget.blur(),this},o.prototype.setValue=function(t){return this._value=t,this._contentDirty=!0,this},o.prototype.getValue=function(){return this._currTarget?this._currTarget.value:this._value},o.prototype.setName=function(t){return this._name=t,this._contentDirty=!0,this},o.prototype.getName=function(){return this._name},o.prototype.setWrap=function(t){return this._wrap=t,this._contentDirty=!0,this},o.prototype.setColumns=function(t){return this._cols=t,this._contentDirty=!0,this},o.prototype.setRows=function(t){return this._rows=t,this._contentDirty=!0,this},o.prototype.deploy=function(t){""!==this._placeholder&&(t.placeholder=this._placeholder),""!==this._value&&(t.value=this._value),""!==this._name&&(t.name=this._name),""!==this._wrap&&(t.wrap=this._wrap),""!==this._cols&&(t.cols=this._cols),""!==this._rows&&(t.rows=this._rows)},r.exports=o});