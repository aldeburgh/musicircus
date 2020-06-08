/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./RenderNode","./EventHandler","./ElementAllocator","./Transform","famous/transitions/Transitionable"],function(t,e,i){function n(t){return[t.clientWidth,t.clientHeight]}function o(t){this.container=t,this._allocator=new p(t),this._node=new r,this._eventOutput=new s,this._size=n(this.container),this._perspectiveState=new c(0),this._perspective=void 0,this._nodeContext={allocator:this._allocator,transform:a.identity,opacity:1,origin:u,align:null,size:this._size},this._eventOutput.on("resize",function(){this.setSize(n(this.container))}.bind(this))}var r=t("./RenderNode"),s=t("./EventHandler"),p=t("./ElementAllocator"),a=t("./Transform"),c=t("famous/transitions/Transitionable"),u=[0,0];o.prototype.getAllocator=function(){return this._allocator},o.prototype.add=function(t){return this._node.add(t)},o.prototype.migrate=function(t){t!==this.container&&(this.container=t,this._allocator.migrate(t))},o.prototype.getSize=function(){return this._size},o.prototype.setSize=function(t){t||(t=n(this.container)),this._size[0]=t[0],this._size[1]=t[1]},o.prototype.update=function(t){t&&(t.transform&&(this._nodeContext.transform=t.transform),t.opacity&&(this._nodeContext.opacity=t.opacity),t.origin&&(this._nodeContext.origin=t.origin),t.align&&(this._nodeContext.align=t.align),t.size&&(this._nodeContext.size=t.size));var e=this._perspectiveState.get();e!==this._perspective&&(this.container.style.perspective=e?e.toFixed()+"px":"",this.container.style.webkitPerspective=e?e.toFixed():"",this._perspective=e),this._node.commit(this._nodeContext)},o.prototype.getPerspective=function(){return this._perspectiveState.get()},o.prototype.setPerspective=function(t,e,i){return this._perspectiveState.set(t,e,i)},o.prototype.emit=function(t,e){return this._eventOutput.emit(t,e)},o.prototype.on=function(t,e){return this._eventOutput.on(t,e)},o.prototype.removeListener=function(t,e){return this._eventOutput.removeListener(t,e)},o.prototype.pipe=function(t){return this._eventOutput.pipe(t)},o.prototype.unpipe=function(t){return this._eventOutput.unpipe(t)},i.exports=o});