/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./Constraint","famous/math/Vector"],function(t,o,e){function i(t){this.options=Object.create(i.DEFAULT_OPTIONS),t&&this.setOptions(t),this.J=new r,this.impulse=new r,s.call(this)}var s=t("./Constraint"),r=t("famous/math/Vector");i.prototype=Object.create(s.prototype),i.prototype.constructor=i,i.DEFAULT_OPTIONS={equation:void 0,period:0,dampingRatio:0};var n=Math.PI;i.prototype.setOptions=function(t){for(var o in t)this.options[o]=t[o]},i.prototype.applyConstraint=function(t,o,e){for(var i=this.impulse,s=this.J,r=this.options,a=r.equation,p=r.dampingRatio,u=r.period,c=0;c<t.length;c++){var h,m,l=t[c],f=l.velocity,v=l.position,d=l.mass;if(0===u)h=0,m=1;else{var y=4*d*n*p/u,O=4*d*n*n/(u*u);h=1/(y+e*O),m=e*O/(y+e*O)}var q=v.x,I=v.y,T=v.z,g=a(q,I,T),x=(a(q+1e-7,v,v)-g)/1e-7,C=(a(q,I+1e-7,v)-g)/1e-7,P=(a(q,I,v+1e-7)-g)/1e-7;s.setXYZ(x,C,P);var S=m/e*g,b=-(s.dot(f)+S)/(h+e*s.normSquared()/d);i.set(s.mult(e*b)),l.applyImpulse(i)}},e.exports=i});