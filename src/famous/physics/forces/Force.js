/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/math/Vector","famous/core/EventHandler"],function(t,e,n){function o(t){this.force=new r(t),this._energy=0,this._eventOutput=null}function i(){this._eventOutput=new p,this._eventOutput.bindThis(this),p.setOutputHandler(this,this._eventOutput)}var r=t("famous/math/Vector"),p=t("famous/core/EventHandler");o.prototype.setOptions=function(t){for(var e in t)this.options[e]=t[e]},o.prototype.applyForce=function(t){t.applyForce(this.force)},o.prototype.getEnergy=function(){return this._energy},o.prototype.setEnergy=function(t){this._energy=t},o.prototype.on=function(){return i.call(this),this.on.apply(this,arguments)},o.prototype.addListener=function(){return i.call(this),this.addListener.apply(this,arguments)},o.prototype.pipe=function(){return i.call(this),this.pipe.apply(this,arguments)},o.prototype.removeListener=function(){return this.removeListener.apply(this,arguments)},o.prototype.unpipe=function(){return this.unpipe.apply(this,arguments)},n.exports=o});