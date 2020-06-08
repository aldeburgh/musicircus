/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mike@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/Entity","famous/core/Transform","famous/core/EventHandler","famous/core/OptionsManager"],function(t,e,n){function o(t){this.options=Object.create(this.constructor.DEFAULT_OPTIONS||o.DEFAULT_OPTIONS),this._optionsManager=new i(this.options),t&&this.setOptions(t),this._eventInput=new r,this._eventOutput=new r,r.setInputHandler(this,this._eventInput),r.setOutputHandler(this,this._eventOutput),this._id=s.register(this)}var s=t("famous/core/Entity"),r=(t("famous/core/Transform"),t("famous/core/EventHandler")),i=t("famous/core/OptionsManager");o.DEFAULT_OPTIONS={},o.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},o.prototype.getOptions=function(){return this._optionsManager.getOptions()},o.prototype.render=function(){return this._id},o.prototype.commit=function(t){},n.exports=o});