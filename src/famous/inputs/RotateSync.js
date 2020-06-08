/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./TwoFingerSync"],function(t,e,s){function o(t){i.call(this),this.options=Object.create(o.DEFAULT_OPTIONS),t&&this.setOptions(t),this._angle=0,this._previousAngle=0}var i=t("./TwoFingerSync");o.prototype=Object.create(i.prototype),o.prototype.constructor=o,o.DEFAULT_OPTIONS={scale:1},o.prototype._startUpdate=function(t){this._angle=0,this._previousAngle=i.calculateAngle(this.posA,this.posB);var e=i.calculateCenter(this.posA,this.posB);this._eventOutput.emit("start",{count:t.touches.length,angle:this._angle,center:e,touches:[this.touchAId,this.touchBId]})},o.prototype._moveUpdate=function(t){var e=this.options.scale,s=i.calculateAngle(this.posA,this.posB),o=i.calculateCenter(this.posA,this.posB),n=e*(s-this._previousAngle),p=n/t;this._angle+=n,this._eventOutput.emit("update",{delta:n,velocity:p,angle:this._angle,center:o,touches:[this.touchAId,this.touchBId]}),this._previousAngle=s},o.prototype.getOptions=function(){return this.options},o.prototype.setOptions=function(t){void 0!==t.scale&&(this.options.scale=t.scale)},s.exports=o});