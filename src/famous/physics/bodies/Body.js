/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./Particle","famous/core/Transform","famous/math/Vector","famous/math/Quaternion","famous/math/Matrix"],function(t,e,o){function n(t){r.call(this,t),t=t||{},this.orientation=new s,this.angularVelocity=new a,this.angularMomentum=new a,this.torque=new a,t.orientation&&this.orientation.set(t.orientation),t.angularVelocity&&this.angularVelocity.set(t.angularVelocity),t.angularMomentum&&this.angularMomentum.set(t.angularMomentum),t.torque&&this.torque.set(t.torque),this.setMomentsOfInertia(),this.angularVelocity.w=0,this.pWorld=new a}var r=t("./Particle"),i=t("famous/core/Transform"),a=t("famous/math/Vector"),s=t("famous/math/Quaternion"),u=t("famous/math/Matrix");n.DEFAULT_OPTIONS=r.DEFAULT_OPTIONS,n.DEFAULT_OPTIONS.orientation=[0,0,0,1],n.DEFAULT_OPTIONS.angularVelocity=[0,0,0],n.AXES=r.AXES,n.SLEEP_TOLERANCE=r.SLEEP_TOLERANCE,n.INTEGRATOR=r.INTEGRATOR,n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.prototype.isBody=!0,n.prototype.setMass=function(){r.prototype.setMass.apply(this,arguments),this.setMomentsOfInertia()},n.prototype.setMomentsOfInertia=function(){this.inertia=new u,this.inverseInertia=new u},n.prototype.updateAngularVelocity=function(){this.angularVelocity.set(this.inverseInertia.vectorMultiply(this.angularMomentum))},n.prototype.toWorldCoordinates=function(t){return this.pWorld.set(this.orientation.rotateVector(t))},n.prototype.getEnergy=function(){return r.prototype.getEnergy.call(this)+.5*this.inertia.vectorMultiply(this.angularVelocity).dot(this.angularVelocity)},n.prototype.reset=function(t,e,o,n){r.prototype.reset.call(this,t,e),this.angularVelocity.clear(),this.setOrientation(o||[1,0,0,0]),this.setAngularMomentum(n||[0,0,0])},n.prototype.setOrientation=function(t){this.orientation.set(t)},n.prototype.setAngularVelocity=function(t){this.wake(),this.angularVelocity.set(t)},n.prototype.setAngularMomentum=function(t){this.wake(),this.angularMomentum.set(t)},n.prototype.applyForce=function(t,e){r.prototype.applyForce.call(this,t),void 0!==e&&this.applyTorque(e.cross(t))},n.prototype.applyTorque=function(t){this.wake(),this.torque.set(this.torque.add(t))},n.prototype.getTransform=function(){return i.thenMove(this.orientation.getTransform(),i.getTranslate(r.prototype.getTransform.call(this)))},n.prototype._integrate=function(t){r.prototype._integrate.call(this,t),this.integrateAngularMomentum(t),this.updateAngularVelocity(t),this.integrateOrientation(t)},n.prototype.integrateAngularMomentum=function(t){n.INTEGRATOR.integrateAngularMomentum(this,t)},n.prototype.integrateOrientation=function(t){n.INTEGRATOR.integrateOrientation(this,t)},o.exports=n});