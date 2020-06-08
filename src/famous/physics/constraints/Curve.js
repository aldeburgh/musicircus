/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./Constraint","famous/math/Vector"],function(t,e,o){function i(t){this.options=Object.create(i.DEFAULT_OPTIONS),t&&this.setOptions(t),this.J=new r,this.impulse=new r,n.call(this)}var n=t("./Constraint"),r=t("famous/math/Vector");i.prototype=Object.create(n.prototype),i.prototype.constructor=i;var s=Math.PI;i.DEFAULT_OPTIONS={equation:function(t,e,o){return 0},plane:function(t,e,o){return o},period:0,dampingRatio:0},i.prototype.setOptions=function(t){for(var e in t)this.options[e]=t[e]},i.prototype.applyConstraint=function(t,e,o){for(var i=this.options,n=this.impulse,r=this.J,a=i.equation,p=i.plane,u=i.dampingRatio,c=i.period,l=0;l<t.length;l++){var h,m,f=t[l],v=f.velocity,y=f.position,d=f.mass;if(0===c)h=0,m=1;else{var O=4*d*s*u/c,q=4*d*s*s/(c*c);h=1/(O+o*q),m=o*q/(O+o*q)}var I=y.x,T=y.y,g=y.z,x=a(I,T,g),C=(a(I+1e-7,y,y)-x)/1e-7,P=(a(I,T+1e-7,y)-x)/1e-7,S=(a(I,T,y+1e-7)-x)/1e-7,b=p(I,T,g),j=(p(I+1e-7,T,g)-b)/1e-7,w=(p(I,T+1e-7,g)-b)/1e-7,A=(p(I,T,g+1e-7)-b)/1e-7;r.setXYZ(C+j,P+w,S+A);var D=m/o*(x+b),E=-(r.dot(v)+D)/(h+o*r.normSquared()/d);n.set(r.mult(o*E)),f.applyImpulse(n)}},o.exports=i});