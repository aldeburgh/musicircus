/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: felix@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/Transform","famous/transitions/Transitionable","famous/core/RenderNode","famous/core/OptionsManager"],function(t,o,e){function i(t){this.options=Object.create(i.DEFAULT_OPTIONS),this._optionsManager=new r(this.options),t&&this.setOptions(t),this.angle=new s(0),this.frontNode=void 0,this.backNode=void 0,this.flipped=!1}var n=t("famous/core/Transform"),s=t("famous/transitions/Transitionable"),r=(t("famous/core/RenderNode"),t("famous/core/OptionsManager"));i.DIRECTION_X=0,i.DIRECTION_Y=1;i.DEFAULT_OPTIONS={transition:!0,direction:i.DIRECTION_X},i.prototype.flip=function(t,o){var e=this.flipped?0:Math.PI;this.setAngle(e,t,o),this.flipped=!this.flipped},i.prototype.setAngle=function(t,o,e){void 0===o&&(o=this.options.transition),this.angle.isActive()&&this.angle.halt(),this.angle.set(t,o,e)},i.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},i.prototype.setFront=function(t){this.frontNode=t},i.prototype.setBack=function(t){this.backNode=t},i.prototype.render=function(){var t,o,e=this.angle.get();this.options.direction===i.DIRECTION_X?(t=n.rotateY(e),o=n.rotateY(e+Math.PI)):(t=n.rotateX(e),o=n.rotateX(e+Math.PI));var s=[];return this.frontNode&&s.push({transform:t,target:this.frontNode.render()}),this.backNode&&s.push({transform:n.moveThen([0,0,1],o),target:this.backNode.render()}),s},e.exports=i});