/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: felix@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/OptionsManager","famous/core/Transform","famous/core/ViewSequence","famous/utilities/Utility"],function(t,i,e){function s(t){this._items=null,this._size=null,this._outputFunction=s.DEFAULT_OUTPUT_FUNCTION,this.options=Object.create(this.constructor.DEFAULT_OPTIONS),this.optionsManager=new o(this.options),this._itemsCache=[],this._outputCache={size:null,target:this._itemsCache},t&&this.setOptions(t)}var o=t("famous/core/OptionsManager"),n=t("famous/core/Transform"),r=t("famous/core/ViewSequence"),u=t("famous/utilities/Utility");s.DEFAULT_OPTIONS={direction:u.Direction.Y,itemSpacing:0,defaultItemSize:[50,50]},s.DEFAULT_OUTPUT_FUNCTION=function(t,i,e){return{transform:this.options.direction===u.Direction.X?n.translate(i,0):n.translate(0,i),target:t.render()}},s.prototype.getSize=function(){return this._size||this.render(),this._size},s.prototype.sequenceFrom=function(t){return t instanceof Array&&(t=new r(t)),this._items=t,this},s.prototype.setOptions=function(t){return this.optionsManager.setOptions.apply(this.optionsManager,arguments),this},s.prototype.setOutputFunction=function(t){return this._outputFunction=t,this},s.prototype.render=function(){for(var t=0,i=0,e=this.options.direction===u.Direction.X?0:1,s=this.options.direction===u.Direction.X?1:0,o=this._items,n=this._itemsCache,r=0;o;){var a=o.get();if(!a)break;var h;a&&a.getSize&&(h=a.getSize()),h||(h=this.options.defaultItemSize),!0!==h[s]&&(i=Math.max(i,h[s]));var c=this._outputFunction.call(this,a,t,r);n[r]=c,h[e]&&!0!==h[e]&&(t+=h[e]+this.options.itemSpacing),o=o.getNext(),r++}return this._itemsCache.splice(r),i||(i=void 0),this._size||(this._size=[0,0]),this._size[e]=t-this.options.itemSpacing,this._size[s]=i,this._outputCache.size=this.getSize(),this._outputCache},e.exports=s});