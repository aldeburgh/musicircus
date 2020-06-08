/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/OptionsManager"],function(t,o,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new n(this.options),t&&this.setOptions(t)}var n=t("famous/core/OptionsManager");e.DEFAULT_OPTIONS={velocityCap:void 0,angularVelocityCap:void 0},e.prototype.setOptions=function(t){this._optionsManager.patch(t)},e.prototype.getOptions=function(){return this._optionsManager.value()},e.prototype.integrateVelocity=function(t,o){var i=t.velocity,e=t.inverseMass,n=t.force;n.isZero()||(i.add(n.mult(o*e)).put(i),n.clear())},e.prototype.integratePosition=function(t,o){var i=t.position,e=t.velocity;this.options.velocityCap&&e.cap(this.options.velocityCap).put(e),i.add(e.mult(o)).put(i)},e.prototype.integrateAngularMomentum=function(t,o){var i=t.angularMomentum,e=t.torque;e.isZero()||(this.options.angularVelocityCap&&e.cap(this.options.angularVelocityCap).put(e),i.add(e.mult(o)).put(i),e.clear())},e.prototype.integrateOrientation=function(t,o){var i=t.orientation,e=t.angularVelocity;e.isZero()||i.add(i.multiply(e).scalarMultiply(.5*o)).put(i)},i.exports=e});