/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/EventHandler"],function(t,e,n){function i(){this.options=this.options||{},this._energy=0,this._eventOutput=null}function o(){this._eventOutput=new p,this._eventOutput.bindThis(this),p.setOutputHandler(this,this._eventOutput)}var p=t("famous/core/EventHandler");i.prototype.setOptions=function(t){for(var e in t)this.options[e]=t[e]},i.prototype.applyConstraint=function(){},i.prototype.getEnergy=function(){return this._energy},i.prototype.setEnergy=function(t){this._energy=t},i.prototype.on=function(){return o.call(this),this.on.apply(this,arguments)},i.prototype.addListener=function(){return o.call(this),this.addListener.apply(this,arguments)},i.prototype.pipe=function(){return o.call(this),this.pipe.apply(this,arguments)},i.prototype.removeListener=function(){return this.removeListener.apply(this,arguments)},i.prototype.unpipe=function(){return this.unpipe.apply(this,arguments)},n.exports=i});