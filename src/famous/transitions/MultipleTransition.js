/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/utilities/Utility"],function(t,s,e){function i(t){this.method=t,this._instances=[],this.state=[]}var n=t("famous/utilities/Utility");i.SUPPORTS_MULTIPLE=!0,i.prototype.get=function(){for(var t=0;t<this._instances.length;t++)this.state[t]=this._instances[t].get();return this.state},i.prototype.set=function(t,s,e){for(var i=n.after(t.length,e),h=0;h<t.length;h++)this._instances[h]||(this._instances[h]=new this.method),this._instances[h].set(t[h],s,i)},i.prototype.reset=function(t){for(var s=0;s<t.length;s++)this._instances[s]||(this._instances[s]=new this.method),this._instances[s].reset(t[s])},e.exports=i});