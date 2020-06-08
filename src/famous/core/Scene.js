/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./Transform","./Modifier","./RenderNode"],function(t,e,n){function i(t){this.id=null,this._objects=null,this.node=new f,this._definition=null,t&&this.load(t)}function r(t){for(var e in c)if(e in t){var n=t[e];return n instanceof Array||(n=[n]),c[e].apply(this,n)}}function o(t){var e=t.transform,n=t.opacity,i=t.origin,o=t.align,a=t.size,s=d.identity;if(e instanceof Array)if(16===e.length&&"number"==typeof e[0])s=e;else for(var f=0;f<e.length;f++)s=d.multiply(s,r(e[f]));else e instanceof Function?s=e:e instanceof Object&&(s=r(e));return new l({transform:s,opacity:n,origin:i,align:o,size:a})}function a(t){for(var e=new f,n=0;n<t.length;n++){var i=s.call(this,t[n]);i&&e.add(i)}return e}function s(t){var e,n;if(t instanceof Array)e=a.call(this,t);else if(n=this._objects.length,t.render&&t.render instanceof Function)e=t;else if(t.target){var i=s.call(this,t.target),r=o.call(this,t);e=new f(r),e.add(i),t.id&&(this.id[t.id]=r)}else t.id&&(e=new f,this.id[t.id]=e);return this._objects[n]=e,e}var d=t("./Transform"),l=t("./Modifier"),f=t("./RenderNode"),c={translate:d.translate,rotate:d.rotate,rotateX:d.rotateX,rotateY:d.rotateY,rotateZ:d.rotateZ,rotateAxis:d.rotateAxis,scale:d.scale,skew:d.skew,matrix3d:function(){return arguments}};i.prototype.create=function(){return new i(this._definition)},i.prototype.load=function(t){this._definition=t,this.id={},this._objects=[],this.node.set(s.call(this,t))},i.prototype.add=function(){return this.node.add.apply(this.node,arguments)},i.prototype.render=function(){return this.node.render.apply(this.node,arguments)},n.exports=i});