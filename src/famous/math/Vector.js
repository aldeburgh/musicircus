/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module"],function(t,r,i){function n(t,r,i){return 1===arguments.length&&void 0!==t?this.set(t):(this.x=t||0,this.y=r||0,this.z=i||0),this}function o(t,r,i){return this.x=t,this.y=r,this.z=i,this}function e(t){return o.call(this,t[0],t[1],t[2]||0)}function s(t){return o.call(this,t.x,t.y,t.z)}function h(t){return o.call(this,t,0,0)}var u=new n(0,0,0);n.prototype.add=function(t){return o.call(u,this.x+t.x,this.y+t.y,this.z+t.z)},n.prototype.sub=function(t){return o.call(u,this.x-t.x,this.y-t.y,this.z-t.z)},n.prototype.mult=function(t){return o.call(u,t*this.x,t*this.y,t*this.z)},n.prototype.div=function(t){return this.mult(1/t)},n.prototype.cross=function(t){var r=this.x,i=this.y,n=this.z,e=t.x,s=t.y,h=t.z;return o.call(u,n*s-i*h,r*h-n*e,i*e-r*s)},n.prototype.equals=function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},n.prototype.rotateX=function(t){var r=this.x,i=this.y,n=this.z,e=Math.cos(t),s=Math.sin(t);return o.call(u,r,i*e-n*s,i*s+n*e)},n.prototype.rotateY=function(t){var r=this.x,i=this.y,n=this.z,e=Math.cos(t),s=Math.sin(t);return o.call(u,n*s+r*e,i,n*e-r*s)},n.prototype.rotateZ=function(t){var r=this.x,i=this.y,n=this.z,e=Math.cos(t),s=Math.sin(t);return o.call(u,r*e-i*s,r*s+i*e,n)},n.prototype.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},n.prototype.normSquared=function(){return this.dot(this)},n.prototype.norm=function(){return Math.sqrt(this.normSquared())},n.prototype.normalize=function(t){0===arguments.length&&(t=1);var r=this.norm();return r>1e-7?s.call(u,this.mult(t/r)):o.call(u,t,0,0)},n.prototype.clone=function(){return new n(this)},n.prototype.isZero=function(){return!(this.x||this.y||this.z)},n.prototype.set=function(t){return t instanceof Array?e.call(this,t):"number"==typeof t?h.call(this,t):s.call(this,t)},n.prototype.setXYZ=function(t,r,i){return o.apply(this,arguments)},n.prototype.set1D=function(t){return h.call(this,t)},n.prototype.put=function(t){this===u?s.call(t,u):s.call(t,this)},n.prototype.clear=function(){return o.call(this,0,0,0)},n.prototype.cap=function(t){if(t===1/0)return s.call(u,this);var r=this.norm();return r>t?s.call(u,this.mult(t/r)):s.call(u,this)},n.prototype.project=function(t){return t.mult(this.dot(t))},n.prototype.reflectAcross=function(t){return t.normalize().put(t),s(u,this.sub(this.project(t).mult(2)))},n.prototype.get=function(){return[this.x,this.y,this.z]},n.prototype.get1D=function(){return this.x},i.exports=n});