/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./TwoFingerSync"],function(t,s,e){function i(t){c.call(this),this.options=Object.create(i.DEFAULT_OPTIONS),t&&this.setOptions(t),this._scaleFactor=1,this._startDist=0,this._eventInput.on("pipe",o.bind(this))}function o(){this.touchAId=void 0,this.touchBId=void 0}var c=t("./TwoFingerSync");i.prototype=Object.create(c.prototype),i.prototype.constructor=i,i.DEFAULT_OPTIONS={scale:1},i.prototype._startUpdate=function(t){this._scaleFactor=1,this._startDist=c.calculateDistance(this.posA,this.posB),this._eventOutput.emit("start",{count:t.touches.length,touches:[this.touchAId,this.touchBId],distance:this._startDist,center:c.calculateCenter(this.posA,this.posB)})},i.prototype._moveUpdate=function(t){var s=this.options.scale,e=c.calculateDistance(this.posA,this.posB),i=c.calculateCenter(this.posA,this.posB),o=(e-this._startDist)/this._startDist,a=Math.max(1+s*o,0),h=(a-this._scaleFactor)/t;this._eventOutput.emit("update",{delta:o,scale:a,velocity:h,distance:e,center:i,touches:[this.touchAId,this.touchBId]}),this._scaleFactor=a},i.prototype.getOptions=function(){return this.options},i.prototype.setOptions=function(t){void 0!==t.scale&&(this.options.scale=t.scale)},e.exports=i});