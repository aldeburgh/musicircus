/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./Vector"],function(t,e,r){function o(t){return this.values=t||[[1,0,0],[0,1,0],[0,0,1]],this}var n=t("./Vector"),i=new o,u=new n;o.prototype.get=function(){return this.values},o.prototype.set=function(t){this.values=t},o.prototype.vectorMultiply=function(t){var e=this.get(),r=t.x,o=t.y,n=t.z,i=e[0],s=e[1],p=e[2],f=i[0],c=i[1],a=i[2],v=s[0],l=s[1],y=s[2],h=p[0],g=p[1],w=p[2];return u.setXYZ(f*r+c*o+a*n,v*r+l*o+y*n,h*r+g*o+w*n)},o.prototype.multiply=function(t){for(var e=this.get(),r=[[]],o=0;o<3;o++){r[o]=[];for(var n=0;n<3;n++){for(var u=0,s=0;s<3;s++)u+=e[o][s]*t[s][n];r[o][n]=u}}return i.set(r)},o.prototype.transpose=function(){for(var t=[],e=this.get(),r=0;r<3;r++)for(var o=0;o<3;o++)t[r][o]=e[o][r];return i.set(t)},o.prototype.clone=function(){for(var t=this.get(),e=[],r=0;r<3;r++)e[r]=t[r].slice();return new o(e)},r.exports=o});