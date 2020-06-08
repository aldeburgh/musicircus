/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./Context","./Transform","./Surface"],function(t,e,o){function r(t){a.call(this,t),this._shouldRecalculateSize=!1,this._container=document.createDocumentFragment(),this.context=new i(this._container),this.setContent(this._container),this._groupSize=[void 0,void 0]}var i=t("./Context"),n=t("./Transform"),a=t("./Surface");r.SIZE_ZERO=[0,0],r.prototype=Object.create(a.prototype),r.prototype.elementType="div",r.prototype.elementClass="famous-group",r.prototype.add=function(){return this.context.add.apply(this.context,arguments)},r.prototype.render=function(){return a.prototype.render.call(this)},r.prototype.deploy=function(t){this.context.migrate(t)},r.prototype.recall=function(t){this._container=document.createDocumentFragment(),this.context.migrate(this._container)},r.prototype.commit=function(t){var e=t.transform,o=t.origin,i=t.opacity,c=t.size,s=a.prototype.commit.call(this,{allocator:t.allocator,transform:n.thenMove(e,[-o[0]*c[0],-o[1]*c[1],0]),opacity:i,origin:o,size:r.SIZE_ZERO});return c[0]===this._groupSize[0]&&c[1]===this._groupSize[1]||(this._groupSize[0]=c[0],this._groupSize[1]=c[1],this.context.setSize(c)),this.context.update({transform:n.translate(-o[0]*c[0],-o[1]*c[1],0),origin:o,size:c}),s},o.exports=r});