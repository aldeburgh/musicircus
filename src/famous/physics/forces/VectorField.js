/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./Force","famous/math/Vector"],function(t,o,i){function n(t){this.options=Object.create(n.DEFAULT_OPTIONS),t&&this.setOptions(t),s.call(this,this.options.field),r.call(this),this.evaluation=new c(0,0,0)}function s(t){var o=n.FIELDS;switch(t){case o.CONSTANT:this.options.direction||(this.options.direction=new c(0,1,0));break;case o.POINT_ATTRACTOR:this.options.position||(this.options.position=new c(0,0,0));break;case o.SPHERE_ATTRACTOR:this.options.radius||(this.options.radius=1)}}function e(t){var o=this.evaluation,i=this.options.field;return o.set(t),i(o,this.options)}var r=t("./Force"),c=t("famous/math/Vector");n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.FIELDS={CONSTANT:function(t,o){return t.set(o.direction)},LINEAR:function(t){return t},RADIAL:function(t){return t.set(t.mult(-1,t))},SPHERE_ATTRACTOR:function(t,o){return t.set(t.mult((o.radius-t.norm())/t.norm()))},POINT_ATTRACTOR:function(t,o){return t.set(o.position.sub(t))}},n.DEFAULT_OPTIONS={strength:1,field:n.FIELDS.CONSTANT},n.prototype.setOptions=function(t){for(var o in t)this.options[o]=t[o]},n.prototype.applyForce=function(t){for(var o=this.force,i=0;i<t.length;i++){var n=t[i];o.set(e.call(this,n.position).mult(n.mass*this.options.strength)),n.applyForce(o)}},i.exports=n});