/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/EventHandler"],function(t,i,o){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this._eventInput=new r,this._eventOutput=new r,r.setInputHandler(this,this._eventInput),r.setOutputHandler(this,this._eventOutput),this._eventInput.on("mousedown",s.bind(this)),this._eventInput.on("mousemove",n.bind(this)),this._eventInput.on("mouseup",p.bind(this)),this.options.propogate?this._eventInput.on("mouseleave",h.bind(this)):this._eventInput.on("mouseleave",p.bind(this)),this._payload={delta:null,position:null,velocity:null,clientX:0,clientY:0,offsetX:0,offsetY:0},this._position=null,this._prevCoord=void 0,this._prevTime=void 0,this._down=!1,this._moved=!1}function s(t){var i,o;t.preventDefault();var e=t.clientX,s=t.clientY;this._prevCoord=[e,s],this._prevTime=d(),this._down=!0,this._move=!1,void 0!==this.options.direction?(this._position=0,i=0,o=0):(this._position=[0,0],i=[0,0],o=[0,0]);var n=this._payload;n.delta=i,n.position=this._position,n.velocity=o,n.clientX=e,n.clientY=s,n.offsetX=t.offsetX,n.offsetY=t.offsetY,this._eventOutput.emit("start",n)}function n(t){if(this._prevCoord){var i=this._prevCoord,o=this._prevTime,s=t.clientX,n=t.clientY,p=d(),h=s-i[0],r=n-i[1];this.options.rails&&(Math.abs(h)>Math.abs(r)?r=0:h=0);var a,u,_=Math.max(p-o,v),l=h/_,c=r/_,f=this.options.scale;this.options.direction===e.DIRECTION_X?(u=f*h,a=f*l,this._position+=u):this.options.direction===e.DIRECTION_Y?(u=f*r,a=f*c,this._position+=u):(u=[f*h,f*r],a=[f*l,f*c],this._position[0]+=u[0],this._position[1]+=u[1]);var m=this._payload;m.delta=u,m.position=this._position,m.velocity=a,m.clientX=s,m.clientY=n,m.offsetX=t.offsetX,m.offsetY=t.offsetY,this._eventOutput.emit("update",m),this._prevCoord=[s,n],this._prevTime=p,this._move=!0}}function p(t){this._down&&(this._eventOutput.emit("end",this._payload),this._prevCoord=void 0,this._prevTime=void 0,this._down=!1,this._move=!1)}function h(t){if(this._down&&this._move){var i=n.bind(this),o=function(t){p.call(this,t),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",o)}.bind(this,t);document.addEventListener("mousemove",i),document.addEventListener("mouseup",o)}}var r=t("famous/core/EventHandler");e.DEFAULT_OPTIONS={direction:void 0,rails:!1,scale:1,propogate:!0},e.DIRECTION_X=0,e.DIRECTION_Y=1;var v=8,d=Date.now;e.prototype.getOptions=function(){return this.options},e.prototype.setOptions=function(t){void 0!==t.direction&&(this.options.direction=t.direction),void 0!==t.rails&&(this.options.rails=t.rails),void 0!==t.scale&&(this.options.scale=t.scale),void 0!==t.propogate&&(this.options.propogate=t.propogate)},o.exports=e});