/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./Spring"],function(t,o,r){function n(t){e.call(this,t)}var e=t("./Spring");n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.DEFAULT_OPTIONS=e.DEFAULT_OPTIONS,n.FORCE_FUNCTIONS=e.FORCE_FUNCTIONS,n.prototype.applyForce=function(t){for(var o=this.force,r=this.options,n=this.disp,e=r.stiffness,i=r.damping,s=r.length,p=r.anchor,a=0;a<t.length;a++){var c=t[a];n.set(p.sub(c.orientation));var u=n.norm()-s;if(0===u)return;var f=c.mass;e*=f,i*=f,o.set(n.normalize(e*this.forceFunction(u,this.options.lMax))),i&&o.set(o.add(c.angularVelocity.mult(-i))),c.applyTorque(o)}},n.prototype.getEnergy=function(t){var o=this.options,r=o.length,n=o.anchor,e=o.stiffness,i=n.sub(t.orientation).norm()-r;return.5*e*i*i},r.exports=n});