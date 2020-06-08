/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./TwoFingerSync"],function(t,e,s){function i(t){o.call(this),this.options=Object.create(i.DEFAULT_OPTIONS),t&&this.setOptions(t),this._displacement=0,this._previousDistance=0}var o=t("./TwoFingerSync");i.prototype=Object.create(o.prototype),i.prototype.constructor=i,i.DEFAULT_OPTIONS={scale:1},i.prototype._startUpdate=function(t){this._previousDistance=o.calculateDistance(this.posA,this.posB),this._displacement=0,this._eventOutput.emit("start",{count:t.touches.length,touches:[this.touchAId,this.touchBId],distance:this._dist,center:o.calculateCenter(this.posA,this.posB)})},i.prototype._moveUpdate=function(t){var e=o.calculateDistance(this.posA,this.posB),s=o.calculateCenter(this.posA,this.posB),i=this.options.scale,c=i*(e-this._previousDistance),n=c/t;this._previousDistance=e,this._displacement+=c,this._eventOutput.emit("update",{delta:c,velocity:n,distance:e,displacement:this._displacement,center:s,touches:[this.touchAId,this.touchBId]})},i.prototype.getOptions=function(){return this.options},i.prototype.setOptions=function(t){void 0!==t.scale&&(this.options.scale=t.scale)},s.exports=i});