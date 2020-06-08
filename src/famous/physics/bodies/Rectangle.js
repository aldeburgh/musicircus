/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./Body","famous/math/Matrix"],function(t,e,i){function s(t){t=t||{},this.size=t.size||[0,0],o.call(this,t)}var o=t("./Body"),r=t("famous/math/Matrix");s.prototype=Object.create(o.prototype),s.prototype.constructor=s,s.prototype.setSize=function(t){this.size=t,this.setMomentsOfInertia()},s.prototype.setMomentsOfInertia=function(){var t=this.mass,e=this.size[0],i=this.size[1];this.inertia=new r([[t*i*i/12,0,0],[0,t*e*e/12,0],[0,0,t*(e*e+i*i)/12]]),this.inverseInertia=new r([[12/(t*i*i),0,0],[0,12/(t*e*e),0],[0,0,12/(t*(e*e+i*i))]])},i.exports=s});