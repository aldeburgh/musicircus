/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/EventHandler"],function(t,e,o){function n(t){r.call(this),this._mappingFunction=t}var r=t("famous/core/EventHandler");n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.prototype.subscribe=null,n.prototype.unsubscribe=null,n.prototype.emit=function(t,e){var o=this._mappingFunction.apply(this,arguments);o&&o.emit instanceof Function&&o.emit(t,e)},n.prototype.trigger=n.prototype.emit,o.exports=n});