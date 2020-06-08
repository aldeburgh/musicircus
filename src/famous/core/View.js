/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./EventHandler","./OptionsManager","./RenderNode","famous/utilities/Utility"],function(t,e,n){function i(t){this._node=new p,this._eventInput=new o,this._eventOutput=new o,o.setInputHandler(this,this._eventInput),o.setOutputHandler(this,this._eventOutput),this.options=r.clone(this.constructor.DEFAULT_OPTIONS||i.DEFAULT_OPTIONS),this._optionsManager=new s(this.options),t&&this.setOptions(t)}var o=t("./EventHandler"),s=t("./OptionsManager"),p=t("./RenderNode"),r=t("famous/utilities/Utility");i.DEFAULT_OPTIONS={},i.prototype.getOptions=function(){return this._optionsManager.value()},i.prototype.setOptions=function(t){this._optionsManager.patch(t)},i.prototype.add=function(){return this._node.add.apply(this._node,arguments)},i.prototype._add=i.prototype.add,i.prototype.render=function(){return this._node.render()},i.prototype.getSize=function(){return this._node&&this._node.getSize?this._node.getSize.apply(this._node,arguments)||this.options.size:this.options.size},n.exports=i});