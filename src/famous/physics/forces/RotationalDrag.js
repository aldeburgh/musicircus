/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./Drag"],function(t,o,r){function n(t){e.call(this,t)}var e=t("./Drag");n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.DEFAULT_OPTIONS=e.DEFAULT_OPTIONS,n.FORCE_FUNCTIONS=e.FORCE_FUNCTIONS,n.FORCE_FUNCTIONS={LINEAR:function(t){return t},QUADRATIC:function(t){return t.mult(t.norm())}},n.prototype.applyForce=function(t){for(var o=this.options.strength,r=this.options.forceFunction,n=this.force,e=0;e<t.length;e++){var p=t[e];r(p.angularVelocity).mult(-100*o).put(n),p.applyTorque(n)}},n.prototype.setOptions=function(t){for(var o in t)this.options[o]=t[o]},r.exports=n});