/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/EventHandler"],function(t,n,e){function i(t,n){this._eventInput=new r,this._eventOutput=new r,r.setInputHandler(this,this._eventInput),r.setOutputHandler(this,this._eventOutput),this._syncs={},t&&this.addSync(t),n&&this.setOptions(n)}function s(t,n){p[t]&&(this._syncs[t]=new p[t](n),this.pipeSync(t))}var r=t("famous/core/EventHandler");i.DIRECTION_X=0,i.DIRECTION_Y=1,i.DIRECTION_Z=2;var p={};i.register=function(t){for(var n in t){if(p[n]){if(p[n]===t[n])return;throw new Error("this key is registered to a different sync class")}p[n]=t[n]}},i.prototype.setOptions=function(t){for(var n in this._syncs)this._syncs[n].setOptions(t)},i.prototype.pipeSync=function(t){var n=this._syncs[t];this._eventInput.pipe(n),n.pipe(this._eventOutput)},i.prototype.unpipeSync=function(t){var n=this._syncs[t];this._eventInput.unpipe(n),n.unpipe(this._eventOutput)},i.prototype.addSync=function(t){if(t instanceof Array)for(var n=0;n<t.length;n++)s.call(this,t[n]);else if(t instanceof Object)for(var e in t)s.call(this,e,t[e])},e.exports=i});