/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/Transform","famous/transitions/Transitionable","famous/core/EventHandler","famous/math/Utilities","famous/inputs/GenericSync","famous/inputs/MouseSync","famous/inputs/ScrollSync","famous/inputs/TouchSync"],function(t,i,s){function n(t){this.options=Object.create(n.DEFAULT_OPTIONS),t&&this.setOptions(t),this._positionState=new u([0,0]),this._differential=[0,0],this._active=!0,this.sync=new l({scroll:{minimumEndSpeed:1e3,rails:!1,scale:.3,stallTime:50,lineHeight:1},mouse:{scale:this.options.scale},touch:{scale:this.options.scale}}),this.eventOutput=new h,h.setInputHandler(this,this.sync),h.setOutputHandler(this,this.eventOutput),p.call(this)}function o(t){var i=this.options,s=i.projection,n=i.snapX,o=i.snapY,e=s&d.x?t[0]:0,a=s&d.y?t[1]:0;return n>0&&(e-=e%n),o>0&&(a-=a%o),[e,a]}function e(){this._active&&(this._positionState.isActive()&&this._positionState.halt(),this.eventOutput.emit("start",{position:this.getPosition()}))}function a(t){if(this._active){var i=this.options;this._differential=t.position;var s=o.call(this,this._differential);this._differential[0]-=s[0],this._differential[1]-=s[1];var n=this.getPosition();if(n[0]+=s[0],n[1]+=s[1],i.xRange){var e=[i.xRange[0]+.5*i.snapX,i.xRange[1]-.5*i.snapX];n[0]=g(n[0],e)}if(i.yRange){var a=[i.yRange[0]+.5*i.snapY,i.yRange[1]-.5*i.snapY];n[1]=g(n[1],a)}this.eventOutput.emit("update",{position:n})}}function c(){this._active&&this.eventOutput.emit("end",{position:this.getPosition()})}function p(){this.sync.on("start",e.bind(this)),this.sync.on("update",a.bind(this)),this.sync.on("end",c.bind(this))}var r=t("famous/core/Transform"),u=t("famous/transitions/Transitionable"),h=t("famous/core/EventHandler"),f=t("famous/math/Utilities"),l=t("famous/inputs/GenericSync"),v=t("famous/inputs/MouseSync"),y=t("famous/inputs/ScrollSync"),m=t("famous/inputs/TouchSync");l.register({scroll:y,touch:m,mouse:v});var d={x:1,y:2};n.DIRECTION_X=d.x,n.DIRECTION_Y=d.y;var g=f.clamp;n.DEFAULT_OPTIONS={projection:d.x|d.y,scale:1,xRange:null,yRange:null,snapX:0,snapY:0,transition:{duration:0}},n.prototype.setOptions=function(t){var i=this.options;if(void 0!==t.projection){var s=t.projection;this.options.projection=0,["x","y"].forEach(function(t){-1!==s.indexOf(t)&&(i.projection|=d[t])})}void 0!==t.scale&&(i.scale=t.scale,this.sync.setOptions({scale:t.scale})),void 0!==t.xRange&&(i.xRange=t.xRange),void 0!==t.yRange&&(i.yRange=t.yRange),void 0!==t.snapX&&(i.snapX=t.snapX),void 0!==t.snapY&&(i.snapY=t.snapY)},n.prototype.getPosition=function(){return this._positionState.get()},n.prototype.setRelativePosition=function(t,i,s){var n=this.getPosition(),o=[n[0]+t[0],n[1]+t[1]];this.setPosition(o,i,s)},n.prototype.setPosition=function(t,i,s){this._positionState.isActive()&&this._positionState.halt(),this._positionState.set(t,i,s)},n.prototype.activate=function(){this._active=!0},n.prototype.deactivate=function(){this._active=!1},n.prototype.toggle=function(){this._active=!this._active},n.prototype.modify=function(t){var i=this.getPosition();return{transform:r.translate(i[0],i[1]),target:t}},s.exports=n});