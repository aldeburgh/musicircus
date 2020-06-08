/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module"],function(i,t,o){function e(){this._chain=[],arguments.length&&this.addModifier.apply(this,arguments)}e.prototype.addModifier=function(i){Array.prototype.push.apply(this._chain,arguments)},e.prototype.removeModifier=function(i){var t=this._chain.indexOf(i);t<0||this._chain.splice(t,1)},e.prototype.modify=function(i){for(var t=this._chain,o=i,e=0;e<t.length;e++)o=t[e].modify(o);return o},o.exports=e});