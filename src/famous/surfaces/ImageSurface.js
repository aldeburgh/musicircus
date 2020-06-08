/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/Surface"],function(e,t,o){function r(e){this._imageUrl=void 0,i.apply(this,arguments)}var i=e("famous/core/Surface"),c=[],n=[],a=[],p=!0;r.enableCache=function(){p=!0},r.disableCache=function(){p=!1},r.clearCache=function(){c=[],n=[],a=[]},r.getCache=function(){return{urlCache:c,countCache:n,nodeCache:n}},r.prototype=Object.create(i.prototype),r.prototype.constructor=r,r.prototype.elementType="img",r.prototype.elementClass="famous-surface",r.prototype.setContent=function(e){var t=c.indexOf(this._imageUrl);-1!==t&&(1===n[t]?(c.splice(t,1),n.splice(t,1),a.splice(t,1)):n[t]--),t=c.indexOf(e),-1===t?(c.push(e),n.push(1)):n[t]++,this._imageUrl=e,this._contentDirty=!0},r.prototype.deploy=function(e){var t=c.indexOf(this._imageUrl);if(void 0===a[t]&&p){var o=new Image;o.src=this._imageUrl||"",a[t]=o}e.src=this._imageUrl||""},r.prototype.recall=function(e){e.src=""},o.exports=r});