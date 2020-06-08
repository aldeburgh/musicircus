/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./Force","famous/math/Vector"],function(o,t,n){function r(o){this.options=Object.create(r.DEFAULT_OPTIONS),o&&this.setOptions(o),this.disp=new i,e.call(this)}var e=o("./Force"),i=o("famous/math/Vector");r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.DECAY_FUNCTIONS={LINEAR:function(o,t){return Math.max(1-1/t*o,0)},MORSE:function(o,t){var n=0===t?100:t,r=o+n*(1-Math.log(2));return Math.max(1-Math.pow(1-Math.exp(r/n-1),2),0)},INVERSE:function(o,t){return 1/(1-t+o)},GRAVITY:function(o,t){return 1/(1-t+o*o)}},r.DEFAULT_OPTIONS={strength:1,anchor:void 0,range:[0,1/0],cutoff:0,cap:1/0,decayFunction:r.DECAY_FUNCTIONS.GRAVITY},r.prototype.setOptions=function(o){void 0!==o.anchor&&(o.anchor.position instanceof i&&(this.options.anchor=o.anchor.position),o.anchor instanceof Array&&(this.options.anchor=new i(o.anchor)),delete o.anchor);for(var t in o)this.options[t]=o[t]},r.prototype.applyForce=function(o,t){var n=this.options,r=this.force,e=this.disp,i=n.strength,a=n.anchor||t.position,c=n.cap,s=n.cutoff,p=n.range[0],h=n.range[1],f=n.decayFunction;if(0!==i)for(var u in o){var O=o[u];if(O!==t){var m=O.mass,v=O.position;e.set(v.sub(a));var y=e.norm();y<h&&y>p&&(r.set(e.normalize(i*m*f(y,s)).cap(c)),O.applyForce(r))}}},n.exports=r});