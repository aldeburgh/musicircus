/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module"],function(t,e,i){function n(){this.listeners={},this._owner=this}n.prototype.emit=function(t,e){var i=this.listeners[t];if(i)for(var n=0;n<i.length;n++)i[n].call(this._owner,e);return this},n.prototype.on=function(t,e){return t in this.listeners||(this.listeners[t]=[]),this.listeners[t].indexOf(e)<0&&this.listeners[t].push(e),this},n.prototype.addListener=n.prototype.on,n.prototype.removeListener=function(t,e){var i=this.listeners[t];if(void 0!==i){var n=i.indexOf(e);n>=0&&i.splice(n,1)}return this},n.prototype.bindThis=function(t){this._owner=t},i.exports=n});