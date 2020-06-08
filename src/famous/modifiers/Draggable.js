/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/Transform","famous/transitions/Transitionable","famous/core/EventHandler","famous/math/Utilities","famous/inputs/GenericSync","famous/inputs/MouseSync","famous/inputs/TouchSync"],function(t,i,n){function s(t){this.options=Object.create(s.DEFAULT_OPTIONS),t&&this.setOptions(t),this._positionState=new u([0,0]),this._differential=[0,0],this._active=!0,this.sync=new v(["mouse","touch"],{scale:this.options.scale}),this.eventOutput=new h,h.setInputHandler(this,this.sync),h.setOutputHandler(this,this.eventOutput),r.call(this)}function o(t){var i=this.options,n=i.projection,s=i.snapX,o=i.snapY,e=n&d.x?t[0]:0,a=n&d.y?t[1]:0;return s>0&&(e-=e%s),o>0&&(a-=a%o),[e,a]}function e(){this._active&&(this._positionState.isActive()&&this._positionState.halt(),this.eventOutput.emit("start",{position:this.getPosition()}))}function a(t){if(this._active){var i=this.options;this._differential=t.position;var n=o.call(this,this._differential);this._differential[0]-=n[0],this._differential[1]-=n[1];var s=this.getPosition();if(s[0]+=n[0],s[1]+=n[1],i.xRange){var e=[i.xRange[0]+.5*i.snapX,i.xRange[1]-.5*i.snapX];s[0]=m(s[0],e)}if(i.yRange){var a=[i.yRange[0]+.5*i.snapY,i.yRange[1]-.5*i.snapY];s[1]=m(s[1],a)}this.eventOutput.emit("update",{position:s})}}function p(){this._active&&this.eventOutput.emit("end",{position:this.getPosition()})}function r(){this.sync.on("start",e.bind(this)),this.sync.on("update",a.bind(this)),this.sync.on("end",p.bind(this))}var c=t("famous/core/Transform"),u=t("famous/transitions/Transitionable"),h=t("famous/core/EventHandler"),f=t("famous/math/Utilities"),v=t("famous/inputs/GenericSync"),l=t("famous/inputs/MouseSync"),y=t("famous/inputs/TouchSync");v.register({mouse:l,touch:y});var d={x:1,y:2};s.DIRECTION_X=d.x,s.DIRECTION_Y=d.y;var m=f.clamp;s.DEFAULT_OPTIONS={projection:d.x|d.y,scale:1,xRange:null,yRange:null,snapX:0,snapY:0,transition:{duration:0}},s.prototype.setOptions=function(t){var i=this.options;if(void 0!==t.projection){var n=t.projection;this.options.projection=0,["x","y"].forEach(function(t){-1!==n.indexOf(t)&&(i.projection|=d[t])})}void 0!==t.scale&&(i.scale=t.scale,this.sync.setOptions({scale:t.scale})),void 0!==t.xRange&&(i.xRange=t.xRange),void 0!==t.yRange&&(i.yRange=t.yRange),void 0!==t.snapX&&(i.snapX=t.snapX),void 0!==t.snapY&&(i.snapY=t.snapY)},s.prototype.getPosition=function(){return this._positionState.get()},s.prototype.setRelativePosition=function(t,i,n){var s=this.getPosition(),o=[s[0]+t[0],s[1]+t[1]];this.setPosition(o,i,n)},s.prototype.setPosition=function(t,i,n){this._positionState.isActive()&&this._positionState.halt(),this._positionState.set(t,i,n)},s.prototype.activate=function(){this._active=!0},s.prototype.deactivate=function(){this._active=!1},s.prototype.toggle=function(){this._active=!this._active},s.prototype.modify=function(t){var i=this.getPosition();return{transform:c.translate(i[0],i[1]),target:t}},n.exports=s});