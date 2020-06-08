/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: felix@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/transitions/CachedMap","famous/core/Entity","famous/core/EventHandler","famous/core/Transform","./RenderController"],function(t,e,r){function n(t){this._currentTarget=null,this._size=[void 0,void 0],this._controller=new c(t),this._controller.inTransformFrom(o.create(i.bind(this,1e-4))),this._controller.outTransformFrom(o.create(i.bind(this,-1e-4))),this._eventInput=new a,a.setInputHandler(this,this._eventInput),this._entityId=s.register(this),t&&this.setOptions(t)}function i(t,e){return u.translate(this._size[0]*(1-e),0,t*(1-e))}var o=t("famous/transitions/CachedMap"),s=t("famous/core/Entity"),a=t("famous/core/EventHandler"),u=t("famous/core/Transform"),c=t("./RenderController");n.prototype.show=function(t){this._currentTarget&&this._eventInput.unpipe(this._currentTarget),this._currentTarget=t,this._currentTarget&&this._currentTarget.trigger&&this._eventInput.pipe(this._currentTarget),this._controller.show.apply(this._controller,arguments)},n.prototype.setOptions=function(t){this._controller.setOptions(t)},n.prototype.render=function(){return this._entityId},n.prototype.commit=function(t){return this._size[0]=t.size[0],this._size[1]=t.size[1],{transform:t.transform,opacity:t.opacity,origin:t.origin,size:t.size,target:this._controller.render()}},r.exports=n});