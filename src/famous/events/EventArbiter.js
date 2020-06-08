/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/EventHandler"],function(t,r,e){function i(t){this.dispatchers={},this.currMode=void 0,this.setMode(t)}var s=t("famous/core/EventHandler");i.prototype.setMode=function(t){if(t!==this.currMode){var r=this.currMode;this.dispatchers[this.currMode]&&this.dispatchers[this.currMode].trigger("unpipe"),this.currMode=t,this.dispatchers[t]&&this.dispatchers[t].emit("pipe"),this.emit("change",{from:r,to:t})}},i.prototype.forMode=function(t){return this.dispatchers[t]||(this.dispatchers[t]=new s),this.dispatchers[t]},i.prototype.emit=function(t,r){if(void 0===this.currMode)return!1;r||(r={});var e=this.dispatchers[this.currMode];return e?e.trigger(t,r):void 0},e.exports=i});