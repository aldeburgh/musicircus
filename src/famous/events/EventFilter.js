/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/EventHandler"],function(t,o,e){function r(t){i.call(this),this._condition=t}var i=t("famous/core/EventHandler");r.prototype=Object.create(i.prototype),r.prototype.constructor=r,r.prototype.emit=function(t,o){if(this._condition(t,o))return i.prototype.emit.apply(this,arguments)},r.prototype.trigger=r.prototype.emit,e.exports=r});