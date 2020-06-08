/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./Body","famous/math/Matrix"],function(t,i,s){function e(t){t=t||{},this.setRadius(t.radius||0),r.call(this,t)}var r=t("./Body"),o=t("famous/math/Matrix");e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.prototype.setRadius=function(t){this.radius=t,this.size=[2*this.radius,2*this.radius],this.setMomentsOfInertia()},e.prototype.setMomentsOfInertia=function(){var t=this.mass,i=this.radius;this.inertia=new o([[.25*t*i*i,0,0],[0,.25*t*i*i,0],[0,0,.5*t*i*i]]),this.inverseInertia=new o([[4/(t*i*i),0,0],[0,4/(t*i*i),0],[0,0,2/(t*i*i)]])},s.exports=e});