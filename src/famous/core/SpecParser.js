/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./Transform"],function(i,r,e){function t(){this.result={}}function n(i,r){return[i[0]*r[0]+i[1]*r[4]+i[2]*r[8],i[0]*r[1]+i[1]*r[5]+i[2]*r[9],i[0]*r[2]+i[1]*r[6]+i[2]*r[10]]}var s=i("./Transform");t._instance=new t,t.parse=function(i,r){return t._instance.parse(i,r)},t.prototype.parse=function(i,r){return this.reset(),this._parseSpec(i,r,s.identity),this.result},t.prototype.reset=function(){this.result={}};var o=[0,0];t.prototype._parseSpec=function(i,r,e){var t,a,p,f,c,l,u;if("number"==typeof i){if(t=i,p=r.transform,l=r.align||r.origin,r.size&&l&&(l[0]||l[1])){var g=[l[0]*r.size[0],l[1]*r.size[1],0];p=s.thenMove(p,n(g,e))}this.result[t]={transform:p,opacity:r.opacity,origin:r.origin||o,align:r.align||r.origin||o,size:r.size}}else{if(!i)return;if(i instanceof Array)for(var m=0;m<i.length;m++)this._parseSpec(i[m],r,e);else{a=i.target,p=r.transform,f=r.opacity,c=r.origin,l=r.align,u=r.size;var y=e;if(void 0!==i.opacity&&(f=r.opacity*i.opacity),i.transform&&(p=s.multiply(r.transform,i.transform)),i.origin&&(c=i.origin,y=r.transform),i.align&&(l=i.align),i.size){var v=r.size;u=[void 0!==i.size[0]?i.size[0]:v[0],void 0!==i.size[1]?i.size[1]:v[1]],v&&(l||(l=c),l&&(l[0]||l[1])&&(p=s.thenMove(p,n([l[0]*v[0],l[1]*v[1],0],e))),c&&(c[0]||c[1])&&(p=s.moveThen([-c[0]*u[0],-c[1]*u[1],0],p))),y=r.transform,c=null,l=null}this._parseSpec(a,{transform:p,opacity:f,origin:c,align:l,size:u},y)}}},e.exports=t});