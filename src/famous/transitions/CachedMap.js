/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module"],function(t,e,u){function n(t){this._map=t||null,this._cachedOutput=null,this._cachedInput=Number.NaN}n.create=function(t){var e=new n(t);return e.get.bind(e)},n.prototype.get=function(t){return t!==this._cachedInput&&(this._cachedInput=t,this._cachedOutput=this._map(t)),this._cachedOutput},u.exports=n});