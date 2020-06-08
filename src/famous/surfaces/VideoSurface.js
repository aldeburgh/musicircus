/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/Surface"],function(t,o,e){function p(t){this._videoUrl=void 0,this.options=Object.create(p.DEFAULT_OPTIONS),t&&this.setOptions(t),r.apply(this,arguments)}var r=t("famous/core/Surface");p.prototype=Object.create(r.prototype),p.prototype.constructor=p,p.DEFAULT_OPTIONS={autoplay:!1},p.prototype.elementType="video",p.prototype.elementClass="famous-surface",p.prototype.setOptions=function(t){for(var o in p.DEFAULT_OPTIONS)void 0!==t[o]&&(this.options[o]=t[o])},p.prototype.setContent=function(t){this._videoUrl=t,this._contentDirty=!0},p.prototype.deploy=function(t){t.src=this._videoUrl,t.autoplay=this.options.autoplay},p.prototype.recall=function(t){t.src=""},e.exports=p});