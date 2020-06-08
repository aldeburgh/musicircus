/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./Constraint","famous/math/Vector"],function(t,i,s){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this.normal=new n,this.pDiff=new n,this.vDiff=new n,this.impulse1=new n,this.impulse2=new n,o.call(this)}var o=t("./Constraint"),n=t("famous/math/Vector");e.prototype=Object.create(o.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={restitution:.5,drift:.5,slop:0},e.prototype.setOptions=function(t){for(var i in t)this.options[i]=t[i]},e.prototype.applyConstraint=function(t,i,s){if(void 0!==i)for(var e=i.velocity,o=i.position,n=i.inverseMass,p=i.radius,r=this.options,u=r.drift,a=-r.slop,l=r.restitution,f=this.normal,h=this.pDiff,m=this.vDiff,v=this.impulse1,c=this.impulse2,O=0;O<t.length;O++){var y=t[O];if(y!==i){var d=y.velocity,_=y.position,D=y.inverseMass,w=y.radius;h.set(_.sub(o)),m.set(d.sub(e));var C=h.norm(),b=C-(p+w),I=1/(n+D);if(b<0){if(f.set(h.normalize()),this._eventOutput){var T={target:y,source:i,overlap:b,normal:f};this._eventOutput.emit("preCollision",T),this._eventOutput.emit("collision",T)}var g=b<=a?((1+l)*f.dot(m)+u/s*(b-a))/(0+s/I):(1+l)*f.dot(m)/(0+s/I);f.mult(s*g).put(v),v.mult(-1).put(c),i.applyImpulse(v),y.applyImpulse(c),this._eventOutput&&this._eventOutput.emit("postCollision",T)}}}},s.exports=e});