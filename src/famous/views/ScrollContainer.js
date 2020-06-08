/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: felix@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/surfaces/ContainerSurface","famous/core/EventHandler","./Scrollview","famous/utilities/Utility","famous/core/OptionsManager"],function(t,e,i){function o(t){this.options=Object.create(o.DEFAULT_OPTIONS),this._optionsManager=new c(this.options),t&&this.setOptions(t),this.container=new n(this.options.container),this.scrollview=new r(this.options.scrollview),this.container.add(this.scrollview),s.setInputHandler(this,this.scrollview),s.setOutputHandler(this,this.scrollview),this.scrollview.subscribe(this.container)}var n=t("famous/surfaces/ContainerSurface"),s=t("famous/core/EventHandler"),r=t("./Scrollview"),a=t("famous/utilities/Utility"),c=t("famous/core/OptionsManager");o.DEFAULT_OPTIONS={container:{properties:{overflow:"hidden"}},scrollview:{direction:a.Direction.X}},o.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},o.prototype.sequenceFrom=function(){return this.scrollview.sequenceFrom.apply(this.scrollview,arguments)},o.prototype.getSize=function(){return this.container.getSize.apply(this.container,arguments)},o.prototype.render=function(){return this.container.render.apply(this.container,arguments)},i.exports=o});